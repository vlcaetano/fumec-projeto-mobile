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
  public gamesAux: Game[]
  
  constructor(private gamesService: GamesService) {
    this.getAllGamesFromFirebase()
  }

  ngOnInit() {
  }

  filterGame(event: any){
    let queryText = event.target.value;
    this.getAllGames()
    if (queryText && queryText.trim() != ''){
      this.games = this.games.filter((game) => {
        return (game.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1);
      })
    }
  }

  private getAllGames() {
    this.games = this.gamesAux
  }

  private async getAllGamesFromFirebase() {
    this.gamesService.getAll().subscribe((gamesFirebase) => {
      this.games = gamesFirebase.map((game) => {
        const gameId = game.payload.doc.id
        const gameData = game.payload.doc.data()

        return {
          id: gameId,
          name: gameData['name'],
          price: gameData['price'],
          description: gameData['description'],
          imgPortrait: gameData['imgPortrait'],
          imgLandscape: gameData['imgLandscape'],
          imgSquare: gameData['imgSquare'],
          featured: gameData['featured'],
          bestSeller: gameData['bestSeller'],
          trending: gameData['trending']
        }
      })
      this.gamesAux = this.games
    })
  }
}
