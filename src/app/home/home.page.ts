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

  private getAllGamesFromFirebase() {
    this.gamesService.getAll().subscribe((gamesFirebase) => {
      this.games = gamesFirebase
    })
  }
}
