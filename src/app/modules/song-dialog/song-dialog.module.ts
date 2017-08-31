// Angular Imports
import { NgModule } from '@angular/core';
import {MdCardModule} from '@angular/material';
// This Module's Components
import { SongDialogComponent } from './song-dialog.component';
import {BottomPlayerModule} from '../bottom-player/bottom-player.module'
import {MdProgressBarModule} from '@angular/material';
import {PlayerControlsModule} from '../player-controls/player-controls.module'
@NgModule({
    imports: [
        MdCardModule,
        BottomPlayerModule,
        MdProgressBarModule,
        PlayerControlsModule
    ],
    declarations: [
        SongDialogComponent,
    ],
    exports: [
        SongDialogComponent,
    ]
})
export class SongDialogModule {

}
