// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SongItemComponent } from './song-item.component';
import {MdCardModule, MdMenuModule} from '@angular/material';

@NgModule({
    imports: [
        MdCardModule,
        MdMenuModule
    ],
    declarations: [
        SongItemComponent,
    ],
    exports: [
        SongItemComponent,
    ]
})
export class SongItemModule {

}
