import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Game } from '../models/game.model';
import { UserGame } from '../models/userGame.model';
import { UserService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private firestore: AngularFirestore, private userService: UserService) { }

  public getAll(): Observable<Game[]> {
    return this.firestore
      .collection<Game>('games', ref => ref.orderBy('name'))
      .valueChanges({ idField: 'id' })
  }

  public getGameById(id: string): Observable<Game> {
    return this.firestore
      .collection<Game>('games')
      .doc(id)
      .valueChanges({ idField: 'id' })
  }

  public getUserGames(): UserGame[] {
    return this.userService.getLoggedUser().userGames
  }

  public addGame(game: Game): Promise<DocumentReference<Game>> {
    delete game.id
    return this.firestore.collection<Game>('games').add({ ...game })
  }

  public updateGame(game: Game, id: string): Promise<void> {
    delete game.id
    return this.firestore.doc(`games/${id}`).update(game)
  }

  public deleteGame(id: string): Promise<void> {
    return this.firestore.doc(`games/${id}`).delete()
  }
}
