import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.page.html',
  styleUrls: ['./game-add.page.scss'],
})
export class GameAddPage implements OnInit {

  public gameForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private gamesService: GamesService,
    private route: Router) { }

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
  }

  public async add() {
    if (this.gameForm.valid) {
      this.gamesService.addGame(this.gameForm.value).then(() => {
        this.route.navigateByUrl('/painel')
      }).catch(err => console.log(err))
    }
  }
}
