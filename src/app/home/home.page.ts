import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  public featuredGames: Game[]
  public bestSellerGames: Game[]

  constructor(private gamesService: GamesService, private router: Router) { }

  ionViewWillEnter() {
    this.featuredGames = this.gamesService.getFeaturedGames()
    this.bestSellerGames = this.gamesService.getBestSellerGames()
  }

  public navigate() {
    // navegar para a página de cadastro apagando o state atual
    this.router.navigateByUrl('/cadastrar-jogo',{
      replaceUrl : true
    });
  }
}
