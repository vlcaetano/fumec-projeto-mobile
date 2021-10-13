import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.page.html',
  styleUrls: ['./game-update.page.scss'],
})
export class GameUpdatePage implements OnInit {
  
  public game: Game = new Game()

  constructor(private gamesService: GamesService, 
              private activeRoute: ActivatedRoute, 
              private route: Router) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')

    this.gamesService.getGameById(id).then((game) => {
      this.game = game
    })
  }
  
  public update(){
    this.gamesService.updateGame(this.game).then(() => this.route.navigate(['/painel']))
  }
}
