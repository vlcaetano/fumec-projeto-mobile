import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.page.html',
  styleUrls: ['./game-update.page.scss'],
})
export class GameUpdatePage implements OnInit {
  public gameForm: FormGroup
  private id: string

  constructor(private formBuilder: FormBuilder,
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(150)])
      ],
      price: ['0', Validators.compose([
        Validators.required,
        Validators.min(0)])
      ],
      imgPortrait: ['', Validators.required],

      imgLandscape: ['', Validators.required],

      imgSquare: ['', Validators.required],

      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500)])
      ],
      featured: [0],
      bestSeller: [0],
      trending: [0]
    })


    this.id = this.route.snapshot.params.id
    this.gamesService.getGameById(this.id).subscribe((game) => {
      if (!game.name) {
        this.router.navigateByUrl('/painel')
      }
      this.gameForm.setValue({
        name: game.name,
        price: game.price,
        imgPortrait: game.imgPortrait,
        imgLandscape: game.imgLandscape,
        imgSquare: game.imgSquare,
        description: game.description,
        featured: game.featured,
        bestSeller: game.bestSeller,
        trending: game.trending
      })
    })
  }

  public update() {
    this.gamesService.updateGame(this.gameForm.value, this.id).then(() => this.router.navigateByUrl('/painel'))
  }
}