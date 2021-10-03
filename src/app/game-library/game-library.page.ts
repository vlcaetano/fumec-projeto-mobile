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
    this.games = this.gamesService.getUserGames()
    this.numOfGames = this.games.length
  }
}
