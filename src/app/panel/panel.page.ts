import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {

  public games: Game[]

  constructor(private gamesService: GamesService) {
   this.getAllGamesFromFirebase()
  }

  ngOnInit() {
  }

  public deleteGame(id: number) {
    this.gamesService.deleteGame(id)
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
    })
  }
}
