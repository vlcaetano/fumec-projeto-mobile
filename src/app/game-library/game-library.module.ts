import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameLibraryPage } from './game-library.page';

import { GameLibraryPageRoutingModule } from './game-library-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GameLibraryPageRoutingModule
  ],
  declarations: [GameLibraryPage]
})
export class GameLibraryPageModule {}
