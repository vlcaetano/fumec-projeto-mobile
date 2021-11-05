import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private authenticated = false;

  constructor(private fireAuth: AngularFireAuth) { }

  createAccount(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  logIn(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  public isAuthenticated(): boolean {
    return this.authenticated
  }

  public setAuthenticated(valor: boolean) {
    this.authenticated = valor
  }
}

