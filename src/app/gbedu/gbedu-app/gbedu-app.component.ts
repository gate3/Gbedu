import { Component } from '@angular/core';
import { Inject, HostListener } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import {MusicService,Music,
        ErrorHandlerService,Error,
        CONSTANTS} from '../../services'
import { MdDialog, MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';
import {SongDialogComponent} from '../../modules'

@Component({
    moduleId: module.id,
    selector: 'gbedu-app',
    templateUrl: 'gbedu-app.component.html',
    styleUrls: ['gbedu-app.component.scss']
})
export class GbeduAppComponent {
    topPosition:number;
    music:Music;
    isPlayerVisible:boolean = false;
    dialogRef;
    snackbarRef:MdSnackBarRef<SimpleSnackBar>;
    theme:string = CONSTANTS.THEME_TYPES.dark

    constructor(@Inject(DOCUMENT) private document: Document, 
                private musicService: MusicService,
                public dialog: MdDialog,
                errorService:ErrorHandlerService,
                public snackBar: MdSnackBar) {

        this.topPosition = this.document.body.scrollTop

        musicService.songAdded$.subscribe(item => this.displaySong(item));

        errorService.errorObject$.subscribe(er => {
            this.showSnackBar(`
                ${er.title}
                ${er.message}
            `,'Refresh')
        });

        /*if (window.navigator && window.navigator.vibrate) {
            // Shake that device!
            navigator.vibrate(1000);
        } else {
            // Not supported
        }*/
    }

    @HostListener('window:devicelight', ['$event'])
    ondevicelight(event){
       const {value} = event
       if(value < CONSTANTS.ENVIRONMENT_LIGHT.darkThresHold){
        this.theme = CONSTANTS.THEME_TYPES.light   
       }else{
        this.theme = CONSTANTS.THEME_TYPES.dark  
       }
    }

    @HostListener('window:userproximity', ['$event'])
    onuserproximity(event){
       const {near} = event
       if(near){
        console.log('near')
        this.musicService.changeStatus(CONSTANTS.PLAYCONTROLS.pause)
       }else{
        console.log('far')
        this.musicService.changeStatus(CONSTANTS.PLAYCONTROLS.play)
       }
    }

    private showSnackBar (message:string,action:string) {
        this.snackbarRef = this.snackBar.open(message, action, {
            duration: 8000,
        });

        this.snackbarRef.onAction().subscribe(()=>{
            location.reload()
        })
    }
    
    displaySong (itm:Music) {
        this.music = itm
        this.isPlayerVisible = true
    }

    /*openDialog (evt) {
        const config = {
            height: '100%',
            width:'100%',
            data:{
                music:this.music
            }
        }
        this.dialogRef = this.dialog.open(SongDialogComponent, config);
    }*/
}   
