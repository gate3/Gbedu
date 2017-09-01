// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PlaylistComponent } from './playlist.component';
import {PlayListRoutingModule} from './playlist-routing.module'
@NgModule({
    imports: [
        PlayListRoutingModule
    ],
    declarations: [
        PlaylistComponent,
    ],
    exports: [
        PlaylistComponent,
    ]
})
export class PlaylistModule {

}
