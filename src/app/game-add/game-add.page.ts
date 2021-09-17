import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.page.html',
  styleUrls: ['./game-add.page.scss'],
})
export class GameAddPage implements OnInit {

  public game: Game = new Game();

  constructor(private gamesService: GamesService, 
              private route: Router) { }

  ngOnInit() {
  }

  public async add(){
    if (this.game.name !== null && this.game.name !== undefined){
      this.gamesService.addGame(this.game);
      this.route.navigate(['/tabs/home'])
    }
  }
}
