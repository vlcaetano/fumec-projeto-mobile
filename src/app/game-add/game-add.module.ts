import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameAddPageRoutingModule } from './game-add-routing.module';

import { GameAddPage } from './game-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GameAddPage]
})
export class GameAddPageModule {}
