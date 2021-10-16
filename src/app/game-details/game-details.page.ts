import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';

import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {

  public game: Game = new Game()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id

    this.gamesService.getGameById(id).subscribe((game) => {
      if (!game.name) {
        this.router.navigateByUrl('/tabs/home')
      }
      this.game = game
    })
  }

  public comprar() {
    this.router.navigateByUrl('/tabs/home')
  }
}
