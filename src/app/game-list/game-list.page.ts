import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';
import _ from 'lodash';
import { __values } from 'tslib';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})

export class GameListPage implements OnInit{
  queryText: string;

  public games: Game[]
  constructor(private gamesService: GamesService) { 
    this.queryText = '';
    this.ionViewWillEnter()
    this.games = this.gamesService.getAll()
  }

  ngOnInit() {
  }
  
  public ionViewWillEnter() {
    this.games = this.gamesService.getAll()
  }

  filterGame(jogo: any){
    let val = jogo.target.value;
    if (val && val.trim() != ''){
      this.games = _.values(this.gamesService.getAll());
      this.games = this.games.filter((game) => {
        return (game.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.games = this.gamesService.getAll();
    }
  }
}
