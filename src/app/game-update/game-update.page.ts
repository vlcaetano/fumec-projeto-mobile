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
  private id: string;

  constructor(private gamesService: GamesService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id

    this.gamesService.getGameById(this.id).subscribe((game) => {
      this.game = game
    })
  }
  
  public update(){
    this.gamesService.updateGame(this.game, this.id).then(() => this.router.navigate(['/painel']))
  }
}
