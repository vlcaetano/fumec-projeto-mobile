import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameAddPageRoutingModule } from './game-add-routing.module';

import { GameAddPage } from './game-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameAddPageRoutingModule
  ],
  declarations: [GameAddPage]
})
export class GameAddPageModule {}
