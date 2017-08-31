import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import {Music} from '../../services'

@Component({
    moduleId: module.id,
    selector: 'song-dialog',
    templateUrl: 'song-dialog.component.html',
    styleUrls: ['song-dialog.component.scss']
})
export class SongDialogComponent {
    song:Music;
    constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<SongDialogComponent>) { 
        this.song = data.music
    }

    closeModal () {
        this.dialogRef.close()
    }
}
