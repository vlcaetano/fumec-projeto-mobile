import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLibraryPage } from './game-library.page';

const routes: Routes = [
  {
    path: '',
    component: GameLibraryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameLibraryPageRoutingModule {}
