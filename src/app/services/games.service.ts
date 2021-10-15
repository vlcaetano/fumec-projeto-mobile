import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private firestore: AngularFirestore) { }

  public getAll() {
    return this.firestore.collection<Game>('games', ref => ref.orderBy('name')).snapshotChanges()
  }

  public getGameById(id: string) {
    return this.firestore.collection<Game>('games').doc(id).ref.get().then((gameFirebase) => {
      if (gameFirebase.exists) {
        const gameId = gameFirebase.id;
        const gameData = gameFirebase.data();

        return this.buildGame(gameId, gameData)
      }

      return this.buildEmptyGame()
    })
  }

  public getUserGames() {
    return this.getAll()
  }

  public addGame(game: Game) {
    delete game.id
    return this.firestore.collection<Game>('games').add({ ...game })
  }

  public updateGame(game: Game){
    return this.firestore.doc(`games/${game.id}`).update(game);
  }

  public deleteGame(id: string){
    return this.firestore.doc(`games/${id}`).delete();
  }

  private buildGame(gameId, gameData): Game {
    return {
      id: gameId,
      name: gameData['name'],
      price: gameData['price'],
      description: gameData['description'],
      imgPortrait: gameData['imgPortrait'],
      imgLandscape: gameData['imgLandscape'],
      imgSquare: gameData['imgSquare'],
      featured: gameData['featured'],
      bestSeller: gameData['bestSeller'],
      trending: gameData['trending']
    }
  }

  private buildEmptyGame(): Game {
    return {
      id: '',
      name: '',
      price: 0,
      description: '',
      imgPortrait: '',
      imgLandscape: '',
      imgSquare: '',
      featured: false,
      bestSeller: false,
      trending: false,
    }
  }
}
