import { Component } from '@angular/core';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import {MusicService,Music} from '../../services/music.service'
import {MdDialog} from '@angular/material';
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
    
    constructor(@Inject(DOCUMENT) private document: Document, 
                musicService: MusicService,
                public dialog: MdDialog) {
        this.topPosition = this.document.body.scrollTop
        musicService.songAdded$.subscribe(item => this.displaySong(item));
    }
    
    displaySong (itm:Music) {
        this.music = itm
        this.isPlayerVisible = true
    }

    openDialog (evt) {
        const config = {
            height: '100%',
            width:'100%',
            data:{
                music:this.music
            }
        }
        this.dialogRef = this.dialog.open(SongDialogComponent, config);
    }
}   