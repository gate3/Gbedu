import { Component,Input } from '@angular/core';
import {MusicService,Music,Image} from '../../services'
import { trigger, style, transition, animate, group,state }
    from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'song-item',
    templateUrl: 'song-item.component.html',
    styleUrls: ['song-item.component.scss']
})
export class SongItemComponent {
    @Input()
    song:Music;
    altImage:string = Image.record;

    constructor(private musicService: MusicService) {
        
    }

    playSong () {
        this.musicService.playSong(this.song)
    }
}
