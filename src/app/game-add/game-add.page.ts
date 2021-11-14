import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.page.html',
  styleUrls: ['./game-add.page.scss'],
})
export class GameAddPage implements OnInit {

  public gameForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder,
              private gamesService: GamesService, 
              private route: Router) { }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      name: ['',Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(150)])
            ],
      price: ['0',Validators.compose([
                  Validators.required,
                  Validators.min(0)])
              ],
      imgPortrait:['', Validators.required],

      imgLandscape:['', Validators.required],

      imgSquare:['', Validators.required],

      description:['', Validators.compose([
                       Validators.required,
                       Validators.minLength(1),
                       Validators.maxLength(500)])
                    ],
      featured:[0],
      bestSeller:[0],
      trending:[0]              
    })  
  }

  public async add(){
    if(this.gameForm.valid){
      let game: Game = new Game();

      game = {
        id: '',
        name: this.gameForm.value.name,
        price: this.gameForm.value.price,
        description: this.gameForm.value.price,
        imgPortrait: this.gameForm.value.imgPortrait,
        imgLandscape: this.gameForm.value.imgLandscape,
        imgSquare: this.gameForm.value.imgSquare,
        featured: this.gameForm.value.featured,
        bestSeller: this.gameForm.value.bestSeller,
        trending: this.gameForm.value.trending
      };

      if (game.name !== null && game.name !== undefined){
        this.gamesService.addGame(game).then(() => {
          this.route.navigateByUrl('/painel')
        }).catch(err => console.log(err))
      }

    }
   
    
  }
}
