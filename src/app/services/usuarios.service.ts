import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore) { }

  public add(user: Usuario) {
    delete user.id
    return this.firestore.collection<Usuario>('usuarios').add(user)
  }

  public getByUID(uidParam: string): Observable<Usuario[]> {
    return this.firestore
      .collection<Usuario>('usuarios', ref => ref.where('uid', '==', uidParam))
      .valueChanges({ idField: 'id' })
  }
}
