import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameDetailsPageRoutingModule } from './game-details-routing.module';

import { GameDetailsPage } from './game-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameDetailsPageRoutingModule
  ],
  declarations: [GameDetailsPage]
})
export class GameDetailsPageModule {}
