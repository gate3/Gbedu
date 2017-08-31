// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppHeaderComponent } from './app-header.component';
import {MdToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule
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
