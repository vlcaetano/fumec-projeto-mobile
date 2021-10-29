import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../models/usuario.model';
import { AuthLoginService } from './../auth/auth-login.service';
import { UserService } from '../services/usuarios.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public user: Usuario = {
    id: '',
    nome:'',
    nickName: '',
    email: '',
    senha: '',
    uid: ''
  };

  constructor(private auth: AuthLoginService, private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  public register(){
    this.auth.createAccount(this.user.email, this.user.senha).then((response)=>{


      if (response.user.uid) {
        this.user.uid = response.user.uid;

        this.userService.add(this.user).then((resultado) => {
          this.route.navigate(['/tabs/login']);
        });
      }

    });
  }
}
