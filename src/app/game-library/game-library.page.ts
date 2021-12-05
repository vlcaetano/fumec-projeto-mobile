import { Component, DoCheck } from '@angular/core';
import { AuthLoginService } from '../auth/auth-login.service';
import { UserGame } from '../models/userGame.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-library',
  templateUrl: 'game-library.page.html',
  styleUrls: ['game-library.page.scss']
})
export class GameLibraryPage implements DoCheck {

  public games: UserGame[]
  public numOfGames: number
  
  constructor(private gamesService: GamesService, private auth: AuthLoginService) {
    this.getUserGames()
  }

  ngDoCheck(): void {
    this.getUserGames()
  }

  private getUserGames() {
    if (this.isAuthenticated()) {
      this.games = this.gamesService.getUserGames()
      this.numOfGames = this.games.length
    }
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated()
  }
}
