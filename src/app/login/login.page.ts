import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  private sub: Subscription

  constructor(private auth: AuthLoginService, private route: Router, private usuarioService: UserService) { }

  ngOnInit() {
  }

  public acessAccount() {
    this.auth.logIn(this.email, this.password).then((response) => {

      if (response.user.uid) {
        this.sub = this.usuarioService.getByUID(response.user.uid).subscribe((users: Usuario[]) => {
          const [user] = users
          this.loggedUser = user
          this.auth.setAuthenticated(true)
          
          this.route.navigateByUrl('/tabs/home');
        })
      }
    })
  }

  public logout() {
    this.auth.logOut().then(() => {
      this.sub.unsubscribe()
      this.auth.setAuthenticated(false)
      this.email = ''
      this.password = ''
    })
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated()
  }
}
