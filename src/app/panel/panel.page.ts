import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {

  public games: Game[]

  constructor(private gamesService: GamesService) { }
  
  ngOnInit() {
    this.getAllGamesFromFirebase()
  }

  public deleteGame(id: string) {
    this.gamesService.deleteGame(id)
  }

  private getAllGamesFromFirebase() {
    this.gamesService.getAll().subscribe((gamesFirebase) => {
      this.games = gamesFirebase
    })
  }
}
