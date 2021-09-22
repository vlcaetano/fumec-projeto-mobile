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
  
  public game: Game

  constructor(private gameService: GamesService, 
              private activeRoute: ActivatedRoute, 
              private route: Router) { }

  ngOnInit() {
    const code = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.game = this.gameService.getGameById(code);
  }
  
  public update(){
    this.gameService.updateGame(this.game);
    this.route.navigate(['/painel']);
  }

}
