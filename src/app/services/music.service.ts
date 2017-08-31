
import { EventEmitter } from "@angular/core";

export class Music {
    constructor (public image:string,
                 public name:string,
                 public artist:string,
                 public streamUrl:string) {}
}

export class MusicService {
    public songAdded$: EventEmitter<Music>;
    public songStatus$: EventEmitter<boolean>; // for play and stop

    constructor() {
        this.songAdded$ = new EventEmitter();
        this.songStatus$ = new EventEmitter();
    }

    playSong (song:Music):void {
        this.songAdded$.emit(song)
    }

    songStopped (isStopped:boolean):void{
        this.songStatus$.emit(isStopped)//when true song is stopped, when false it's play
    }
}
