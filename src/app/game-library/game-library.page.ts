import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-library',
  templateUrl: 'game-library.page.html',
  styleUrls: ['game-library.page.scss']
})
export class GameLibraryPage {

  public games: Game[]
  public numOfGames: number
  
  constructor(private gamesService: GamesService) {
    this.getAllGamesFromFirebase()
  }

  private async getAllGamesFromFirebase() {
    this.gamesService.getAll().subscribe((gamesFirebase) => {
      this.games = gamesFirebase.map((game) => {
        const gameId = game.payload.doc.id
        const gameData = game.payload.doc.data()

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
      })
      this.numOfGames = this.games.length
    })
  }
}
