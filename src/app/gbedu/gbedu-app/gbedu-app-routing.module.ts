import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GbeduAppComponent } from './gbedu-app.component';

const routes: Routes = [
  {
    path: '', component: GbeduAppComponent,
    children:[
     { path: '', loadChildren: './home/home.module#HomeModule' },
     { path: 'playlist', loadChildren: './playlist/playlist.module#PlaylistModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GbeduAppRoutingModule { }
