// Angular Imports
import { NgModule } from '@angular/core';
// This Module's Components
import { BottomPlayerComponent } from './bottom-player.component';
import {MdMenuModule,MdProgressBarModule} from '@angular/material';
import {PlayerControlsModule} from '../player-controls/player-controls.module';

@NgModule({
    imports: [
        MdMenuModule,
        MdProgressBarModule,
        PlayerControlsModule
    ],
    declarations: [
        BottomPlayerComponent,
    ],
    exports: [
        BottomPlayerComponent,
    ]
})
export class BottomPlayerModule {
}
