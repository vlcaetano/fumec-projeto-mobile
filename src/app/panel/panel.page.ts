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

  constructor(private gamesService: GamesService) {
    this.updateData()
  }

  ngOnInit() {
  }

  public deleteGame(id: number) {
    this.gamesService.deleteGame(id)
    this.updateData()
  }

  public updateData() {
    this.games = this.gamesService.getAll()
  }
}
