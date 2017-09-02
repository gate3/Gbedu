
import { EventEmitter } from "@angular/core";

export class Music {
    constructor (public image:string,
                 public name:string,
                 public artist:string,
                 public streamUrl:string) {}
}

export class MusicService {
    public songAdded$: EventEmitter<Music>;
    public songStatus$: EventEmitter<number>; // for play and pause
    public playPauseToggle$:EventEmitter<boolean>;

    constructor() {
        this.songAdded$ = new EventEmitter();
        this.songStatus$ = new EventEmitter();
        this.playPauseToggle$ = new EventEmitter();
    }

    playSong (song:Music):void {
        this.songAdded$.emit(song)
    }

    changeStatus (status:number):void{
        this.songStatus$.emit(status)//when true song is stopped, when false it's play
    }

    togglePlayPause (isPlay:boolean) {
        this.playPauseToggle$.emit(isPlay)//true for play, false for pause
    }
}
