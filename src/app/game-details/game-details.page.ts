import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLoginService } from '../auth/auth-login.service';
import { Game } from '../models/game.model';
import { UserGame } from '../models/userGame.model';
import { Usuario } from '../models/usuario.model';

import { GamesService } from '../services/games.service';
import { UserService } from '../services/usuarios.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {

  public game: Game = new Game()

  private id: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private userService: UserService,
    private auth: AuthLoginService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id

    this.gamesService.getGameById(this.id).subscribe((game) => {
      if (!game.name) {
        this.router.navigateByUrl('/tabs/home')
      }
      this.game = game
    })
  }

  public buyGame() {
    const userGame: UserGame = { 
      id: this.game.id,
      name: this.game.name,
      imgSquare: this.game.imgSquare 
    }

    let user: Usuario = this.userService.getLoggedUser()
    user.userGames.push(userGame)
    this.userService.updateUser(user, user.id).then(() => {
      this.router.navigateByUrl('/tabs/home')
    })
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated()
  }

  public gameNotPurchased(): boolean {
    let user: Usuario = this.userService.getLoggedUser()
    if (user && user.userGames.some((game) => this.game.id == game.id)) {
      return false
    }
    return true
  }
}
