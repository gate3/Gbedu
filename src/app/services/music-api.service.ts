import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MusicApiService {
  
  constructor(private http: Http) { }
  
  private _clientKey:string = 'client_id=vCrJOCBiaW5wdhpBD0bV6nUaNYCbYNZI';
  private _secret:string = 'ascGMYWf7ToWJHIkXtOdSpPPOv972n5V';
  private _rootUrl:string = 'https://api.soundcloud.com/'
  
  private _generalTracks = 'tracks?'

  fetchRandomSongs (quantity:number) { 
    const url = this._rootUrl+this._generalTracks+'&kind=top&limit='+quantity+'&'+this._clientKey;
    return this.http.get(url)
             .toPromise()
             .then(response =>{ 
                 return response.json()
             })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}