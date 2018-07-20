import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable()
export class EpisodeService{

    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    signup(){
        
        let headers = new Headers({'Content-Type': 'application/json'})

        return this._http.get(this.url+'/episode', {headers: headers}).map(res => res.json());
    }

}