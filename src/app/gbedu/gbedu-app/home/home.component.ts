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
    }

    private _loadRandomSongs ():void {
        this.musicApiService
        .searchSongs('olamide')
        .limit(20)
        .performFetch()
        .then(
            s=>{
                console.log(s)
                this.isLoading = false
                s.forEach((m)=>{
                    this._processTracks(m)
                })
            },
        ).catch(
            e=>this.errorService.showError(new Error('An Error Occured','An Error Occurred, please try again'))
        )
    }

    private _processTracks (m):void {
        const {artistName, artworkUrl100, trackName, previewUrl} = m
        let modart:string = artworkUrl100
        if(modart != null){
            modart = modart.replace('100x100bb', '300x300bb')
        }                    
        this.randSongs.push(new Songs(modart, trackName, artistName, previewUrl))
    }

}

export class Songs {
    constructor (public image:string,
                 public name:string,
                 public artist:string,
                 public streamUrl:string) {}
}
