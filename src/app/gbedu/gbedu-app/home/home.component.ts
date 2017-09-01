import { Component,OnInit } from '@angular/core';
import {Image, MusicApiService, Music, ErrorHandlerService, Error,CONSTANTS} from '../../../services'
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit{
    
    randSongs:Array<Songs> = [];
    playlistSongs:Array<Songs> = [];
    isLoading:boolean = false;
    
    constructor(private musicApiService: MusicApiService, 
                private errorService: ErrorHandlerService){}

    ngOnInit(): void {
        this.isLoading = true
        this._loadRandomSongs()
        //this._loadPlaylists()
    }

    private _loadRandomSongs ():void {
        this.musicApiService
        .randomSongs(8)
        .performFetch()
        .then(
            s=>{
                this.isLoading = false
                s.forEach((m)=>{
                    this._processTracks(m,1)
                })
            },
        ).catch(
            e=>this.errorService.showError(new Error('An Error Occured','An Error Occurred, please try again'))
        )
    }

    /*private _loadPlaylists () {
        this.musicApiService
        .playlistSongs(8)
        .performFetch()
        .then(
            s=>{
                console.log(s)
                this.isLoading = false
                s.forEach((m)=>{
                    this._processTracks(m,2)
                })
            },
        ).catch(
            e=>this.errorService.showError(new Error('An Error Occured','An Error Occurred, please try again'))
        )
    }*/

    private _processTracks (m, type):void {
        const {title, artwork_url, user,stream_url} = m
        let modart:string = artwork_url
        if(artwork_url != null){
            modart = artwork_url
            modart = modart.replace('-large', '-crop')
        }                    
        switch(type){
            case 1:
                this.randSongs.push(new Songs(modart,title,user.username,stream_url))
                break
            case 2:
                this.playlistSongs.push(new Songs(modart,title,user.username,stream_url))
                break
        }
    }

}

export class Songs {
    constructor (public image:string,
                 public name:string,
                 public artist:string,
                 public streamUrl:string) {}
}
