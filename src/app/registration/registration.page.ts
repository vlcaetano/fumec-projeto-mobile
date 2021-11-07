import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './../models/usuario.model';
import { AuthLoginService } from './../auth/auth-login.service';
import { UserService } from '../services/usuarios.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthLoginService, 
              private userService: UserService, 
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
    });
  }

  public register() {
    let user: Usuario = null;
  
    if(this.userForm.valid){

      user = {
        id: '',
        nome: this.userForm.value.nomeCompleto,
        nickName: this.userForm.value.nomeUsuario,
        email: this.userForm.value.email,
        senha: this.userForm.value.senha,
        uid: ''
      };
    
      this.auth.createAccount(user.email, user.senha).then((response) => {

        if (response.user.uid) {
          user.uid = response.user.uid
  
          this.userService.add(user).then((resultado) => {
            this.route.navigateByUrl('/tabs/login')
          });
        }
  
      });
    } else{
      console.log(" ta ok n");
    }
   
  }
}
