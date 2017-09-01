// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
// This Module's Components
import { GbeduAppComponent } from './gbedu-app.component';
import {GbeduAppRoutingModule} from './gbedu-app-routing.module'
import {AppHeaderModule,BottomPlayerModule,SongDialogComponent,SongDialogModule} from '../../modules'
import {MdSidenavModule,MdDialogModule,MdSnackBarModule} from '@angular/material';

@NgModule({
    imports: [
        GbeduAppRoutingModule,
        AppHeaderModule,
        MdSidenavModule,
        BottomPlayerModule,
        CommonModule,
        MdDialogModule,
        SongDialogModule,
        MdSnackBarModule
    ],
    declarations: [
        GbeduAppComponent,
    ],
    exports: [
        GbeduAppComponent,
    ],
    entryComponents:[
        SongDialogComponent
    ]
})
export class GbeduAppModule {

}
