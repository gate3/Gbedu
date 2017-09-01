// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SearchComponent } from './search.component';
import {SearchRoutingModule} from './search-routing.module'
@NgModule({
    imports: [
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
    ],
    exports: [
        SearchComponent,
    ]
})
export class SearchModule {

}
