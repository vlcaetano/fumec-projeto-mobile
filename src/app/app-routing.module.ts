import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService} from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
   {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalhes/:id',
    loadChildren: () => import('./game-details/game-details.module').then( m => m.GameDetailsPageModule)
  },
  {
    path: 'cadastrar-jogo',
    loadChildren: () => import('./game-add/game-add.module').then( m => m.GameAddPageModule)
  },
  {
    path: 'editar-jogo/:id',
    loadChildren: () => import('./game-update/game-update.module').then( m => m.GameUpdatePageModule)
  },
  {
    path: 'game-list',
    loadChildren: () => import('./game-list/game-list.module').then( m => m.GameListPageModule)
  },
  {
    path: 'painel',
    loadChildren: () => import('./panel/panel.module').then( m => m.PanelPageModule),
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
