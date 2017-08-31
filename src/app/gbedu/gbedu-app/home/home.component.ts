import { Component,OnInit } from '@angular/core';
import {Image, MusicApiService, Music} from '../../../services'
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit{
    
    recentSongs:Array<Songs> = []

    constructor(private musicApiService: MusicApiService){}

    ngOnInit(): void {
        this.musicApiService.fetchRandomSongs(4).then(
            s=>{
                s.forEach((m)=>{
                    const {title, artwork_url, user,stream_url} = m
                    //console.log({title, artwork_url, user,stream_url})
                    this.recentSongs.push(new Songs(artwork_url,title,user.username,stream_url))
                })
            },
        ).catch(e=>console.log(e))
    }

}

export class Songs {
    constructor (public image:string,
                 public name:string,
                 public artist:string,
                 public streamUrl:string) {}
}

/*export class Songs {
    constructor(public artist:{},
                public image:Array<{}>,
                public name:string, 
                public playcount:string){}
}*/
