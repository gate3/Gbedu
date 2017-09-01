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
    isLoading:boolean = false;

    constructor(private musicApiService: MusicApiService){}

    ngOnInit(): void {
        this.isLoading = true
        this.musicApiService.fetchRandomSongs(8).then(
            s=>{
                this.isLoading = false
                s.forEach((m)=>{
                    const {title, artwork_url, user,stream_url} = m
                    let modart:string = artwork_url
                    if(artwork_url != null){
                        modart = artwork_url
                        modart = modart.replace('-large', '-crop')
                    }                    
                    this.recentSongs.push(new Songs(modart,title,user.username,stream_url))
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
