// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
// This Module's Components
import { AppHeaderComponent } from './app-header.component';
import {MdToolbarModule} from '@angular/material';
import {MdAutocompleteModule,MdInputModule} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        CommonModule,
        MdAutocompleteModule,
        MdInputModule
    ],
    declarations: [
        AppHeaderComponent,
    ],
    exports: [
        AppHeaderComponent,
    ]
})
export class AppHeaderModule {

}
