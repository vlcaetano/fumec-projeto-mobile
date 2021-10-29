import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore) { }

  public add(user: Usuario) {
    delete user.id;
    return this.firestore.collection('usuarios').add(user);
  }

  public getByUID(uidParam: string) {
    return this.firestore
    .collection('usuarios', ref=> ref.where('uid', '==', uidParam) )
    .snapshotChanges();
  }
}
