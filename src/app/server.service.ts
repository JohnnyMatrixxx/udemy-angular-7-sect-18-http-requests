import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        //return this.http.post('https://udemy-ng-http-5c9e5.firebaseio.com/data.json', servers, {headers: headers});
        return this.http.put('https://udemy-ng-http-5c9e5.firebaseio.com/data.json', servers, {headers: headers});
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-5c9e5.firebaseio.com/data.json');
    }

}