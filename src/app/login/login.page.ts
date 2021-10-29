import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthLoginService } from './../auth/auth-login.service';
import {UserService} from './../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor(private auth: AuthLoginService, private route: Router, private usuarioService: UserService) { }

  ngOnInit() {
  }

  acessAccount(){
    this.auth.logIn(this.email, this.password).then((response)=>{

      if(response.user.uid){
        this.auth.setAuthenticated(true);

        this.usuarioService.getByUID(response.user.uid).subscribe((users: any[])=>{
          const [usuario] = users;

          const idUser = usuario.payload.doc.id;

          const usuarioLogado = {
            id: idUser,
            nome: usuario.payload.doc.data()['nome'],
            nickName: usuario.payload.doc.data()['nickName'],
            email: usuario.payload.doc.data()['email'],
            senha: usuario.payload.doc.data()['senha'],
            uid: usuario.payload.doc.data()['uid']
          };

        this.route.navigate(['/painel']);
      });
    }
    });
  }
}
