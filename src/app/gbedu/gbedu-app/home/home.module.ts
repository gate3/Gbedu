// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
// This Module's Components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {SongItemModule} from '../../../modules'
import { FlexLayoutModule } from '@angular/flex-layout';

import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        SongItemModule,
        FlexLayoutModule,
        OwlModule
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
