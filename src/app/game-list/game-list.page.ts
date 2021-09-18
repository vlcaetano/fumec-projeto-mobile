import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})

export class GameListPage implements OnInit{

  public games: Game[]
  
  constructor(private gamesService: GamesService) {
    this.games = this.gamesService.getAll()
  }

  ngOnInit() {
  }

  filterGame(event: any){
    let queryText = event.target.value;
    this.games = this.gamesService.getAll();
    if (queryText && queryText.trim() != ''){
      this.games = this.games.filter((game) => {
        return (game.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1);
      })
    }
  }
}
