import { Component,Output,EventEmitter } from '@angular/core';
import {CONSTANTS,MusicService} from '../../services';

@Component({
    moduleId: module.id,
    selector: 'player-controls',
    templateUrl: 'player-controls.component.html',
    styleUrls: ['player-controls.component.scss']
})
export class PlayerControlsComponent {
    private controlEnum = {
        play:'play_circle_filled',
        pause:'pause_circle_filled'
    }

    @Output()
    selectedControl:EventEmitter<number> = new EventEmitter<number>();
    playPauseCtrl:string = this.controlEnum.play;
    controls = CONSTANTS.PLAYCONTROLS

    constructor (musicService:MusicService) {
        musicService.playPauseToggle$.subscribe(isPlay => {
            if(!isPlay){//when paused
                this._showPlayBtn()
            }else{//when played
                this._showPauseBtn()
            }
        });
    }

    private _showPlayBtn ():void{
        this.playPauseCtrl = this.controlEnum.play
    }

    private _showPauseBtn ():void{
        this.playPauseCtrl = this.controlEnum.pause
    }

    controlClick (controlId:number):void {
        if(controlId === CONSTANTS.PLAYCONTROLS.play){//if play clicked
            if(this.playPauseCtrl === this.controlEnum.play){
                this._showPauseBtn()
                controlId = CONSTANTS.PLAYCONTROLS.play
            }else{
                this._showPlayBtn()
                controlId = CONSTANTS.PLAYCONTROLS.pause
            }
        }
        this.selectedControl.emit(controlId)
    }
}
