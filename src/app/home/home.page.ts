import { Component, Injectable } from '@angular/core';

import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 5.5
  }

  public games: Game[]

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
    })
  }
}
