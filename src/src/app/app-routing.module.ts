import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'game-play', component: GamePlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
