import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { animateFactory } from 'ng2-animate';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
    animations: [animateFactory(1000, 200, 'ease-in')]    
})
export class AppHeaderComponent {

    @Output()
    sideNavClick:EventEmitter<boolean> = new EventEmitter<boolean>();
    isSearchPage:boolean = false;
    options:Array<string>;

    constructor(public router: Router ) { }

    openSideNav (){
        this.sideNavClick.emit(true)
    }

    toggleSearchPage () {
        this.isSearchPage = !this.isSearchPage
        if(this.isSearchPage){
            this.router.navigate(['/search']);
        }else{
            this.router.navigate(['/']);
        }
    }

}
