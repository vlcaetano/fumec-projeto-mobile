import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './../models/usuario.model';
import { AuthLoginService } from './../auth/auth-login.service';
import { UserService } from '../services/usuarios.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public userForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private auth: AuthLoginService, 
              private userService: UserService, 
              private photoService: PhotoService,
              private route: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nomeCompleto: ['',Validators.compose([
                        Validators.required, 
                        Validators.minLength(6),
                        Validators.maxLength(150)])
                      ],
      nomeUsuario: ['', Validators.compose([
                        Validators.required, 
                        Validators.minLength(3),
                        Validators.maxLength(30)])
                    ],
      email: ['', Validators.compose([
                  Validators.required, 
                  Validators.email])
              ],
      senha: ['', Validators.compose([
                  Validators.required, 
                  Validators.minLength(6)])
              ]
    })
  }

  public activateCamera() {
    this.photoService.takePhoto()
  }

  public register() {
    let user: Usuario = null
  
    if(this.userForm.valid){

      user = {
        id: '',
        nome: this.userForm.value.nomeCompleto,
        nickName: this.userForm.value.nomeUsuario,
        email: this.userForm.value.email,
        senha: this.userForm.value.senha,
        uid: '',
        url: '',
        userGames: []
      }
    
      this.auth.createAccount(user.email, user.senha).then((response) => {
        user.uid = response.user.uid

        this.photoService.upload(user.uid).then((fileRef) => {
          fileRef.getDownloadURL().subscribe((url) => {
            user.url = url;

            this.userService.add(user).then(() => {
              this.route.navigateByUrl('/tabs/login')
            })
          })
        })
      })
    } 
  }
}
