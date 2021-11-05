import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

import { AuthLoginService } from './../auth/auth-login.service';
import { UserService } from './../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string
  public password: string
  public loggedUser: Usuario

  constructor(private auth: AuthLoginService, private route: Router, private usuarioService: UserService) { }

  ngOnInit() {
    this.loggedUser = null
  }

  public acessAccount() {
    this.auth.logIn(this.email, this.password).then((response) => {

      if (response.user.uid) {
        this.auth.setAuthenticated(true)

        this.usuarioService.getByUID(response.user.uid).subscribe((users: Usuario[]) => {
          const [user] = users
          this.loggedUser = user

          this.route.navigateByUrl('/tabs/home');
        })
      }
    })
  }

  public logout() {
    //TODO
  }
}
