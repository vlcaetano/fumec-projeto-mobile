import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private loggedUser: Usuario = null

  constructor(private firestore: AngularFirestore) { }

  public add(user: Usuario) {
    delete user.id
    return this.firestore.collection<Usuario>('users').add(user)
  }

  public updateUser(user: Usuario, id: string): Promise<void> {
    delete user.id
    return this.firestore.doc(`users/${id}`).update(user)
  }

  public getByUID(uidParam: string): Observable<Usuario[]> {
    return this.firestore
      .collection<Usuario>('users', ref => ref.where('uid', '==', uidParam))
      .valueChanges({ idField: 'id' })
  }

  public getLoggedUser(): Usuario {
    return this.loggedUser
  }

  public setLoggedUser(user: Usuario): void {
    this.loggedUser = user
  }
}
