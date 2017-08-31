import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})
export class AppHeaderComponent {

    @Output()
    sideNavClick:EventEmitter<boolean> = new EventEmitter<boolean>();

    openSideNav (){
        this.sideNavClick.emit(true)
    }

}
