import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from './../auth/auth-login.service';
import { UserService } from './../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public showErrorMessage: boolean = false
  public userForm: FormGroup
  public loggedUser: Usuario

  private sub: Subscription

  constructor(private auth: AuthLoginService, private route: Router, private usuarioService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
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


  public acessAccount() {
    let user: Usuario = null
    this.showErrorMessage = true

    if (this.userForm.valid) {
      user = this.userForm.value
    }

    this.auth.logIn(user.email, user.senha).then((response) => {

      if (response.user.uid) {
        this.sub = this.usuarioService.getByUID(response.user.uid).subscribe((users: Usuario[]) => {
          const [user] = users
          this.loggedUser = user
          this.auth.setAuthenticated(true)

          this.route.navigateByUrl('/tabs/home')
        })
      }
    })
  }

  public logout() {
    this.showErrorMessage = false
    this.sub.unsubscribe()
    this.auth.logOut().then(() => {
      this.auth.setAuthenticated(false)
      this.userForm.setValue({
        email:'',
        senha:''
      })
    })
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated()
  }
}
