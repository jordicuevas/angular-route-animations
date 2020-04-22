import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './routes/about/about.component';
import {RightComponent} from './routes/right/right.component';
import {LeftComponent} from './routes/left/left.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'right', component: RightComponent, data: { animation: 'isRight' } },
  { path: 'left', component: LeftComponent, data: { animation: 'isLeft' } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
