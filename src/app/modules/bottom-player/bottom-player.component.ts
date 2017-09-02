import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {Image,Music,CONSTANTS,MusicService} from '../../services'
import { trigger, style, transition, animate, group,state }
    from '@angular/animations';
import { Howl } from 'howler'

@Component({
    moduleId: module.id,
    selector: 'bottom-player',
    templateUrl: 'bottom-player.component.html',
    styleUrls: ['bottom-player.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(400)
            ])
        ])
    ]
})
export class BottomPlayerComponent implements OnInit,OnChanges {

    @Input()
    song:Music;

    altImage:string = Image.record;
    isVisible:boolean = false;
    sound:Howl;
    soundId:number;
    duration:string = '0:00';
    position:number = 0;
    currentTime:string = '0:00';
    isPaused:boolean;

    @Output()
    openMusicDialog:EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor (private musicService:MusicService) {
    
    }

    ngOnInit(): void {
        this.musicService.songStatus$.subscribe(status => {
            switch (status){
                case CONSTANTS.PLAYCONTROLS.pause:
                    this.pauseTrack()
                    break
                case CONSTANTS.PLAYCONTROLS.play:
                    this.playTrack()
                    break
            }
        });
    }

    swiped (evt) {
        this.openMusicDialog.emit(evt)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.sound != null){//if the sound object exists
            this.stopTrack()
        }
            this.playTrack()
            this.musicService.togglePlayPause(true)
    }

    controlClicked (id:number) {
        switch(id){
            case CONSTANTS.PLAYCONTROLS.play:
                this.playTrack();
                break;
            case CONSTANTS.PLAYCONTROLS.pause:
                this.pauseTrack()
                break;
        }
    }

    private pauseTrack () {
        if(this.sound != null){
            this.sound.pause();
            this.isPaused = true
        }
    }

    private stopTrack () {
        this.musicService.changeStatus(CONSTANTS.PLAYCONTROLS.pause)
        this.currentTime = '0:00'
        this.position = 0;
        this.duration = '0:00';

        if(this.sound != null){
            this.sound.stop()
            this.isPaused = false
        }
    }

    private _formatTime (secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;
    
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    private updateTrackPosition () {
        let seek:any = this.sound.seek() || 0;
        this.position = (((seek / this.sound.duration()) * 100) || 0);
        this.currentTime = this._formatTime(Math.round(seek))
        if (this.sound.playing()) {
            requestAnimationFrame(this.updateTrackPosition.bind(this));
        }
    }

    private playTrack () {
        const url = this.song.streamUrl
        
        if(!this.isPaused){
            this.sound = new Howl({
                src: [url],
                autoplay: true,
                volume: 0.9,
                html5: true,
                onplay:() => {
                    this.duration = this._formatTime(Math.round(this.sound.duration(this.soundId)))
                    requestAnimationFrame(this.updateTrackPosition.bind(this))
                },
                onend:()=>{
                    this.musicService.changeStatus(CONSTANTS.PLAYCONTROLS.pause)
                }
            });
        }
        this.soundId = this.sound.play()
        this.isPaused = false
    }

}
