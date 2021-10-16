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

  private getAllGamesFromFirebase() {
    this.gamesService.getAll().subscribe((gamesFirebase) => {
      this.games = gamesFirebase
      this.numOfGames = this.games.length
    })
  }
}
