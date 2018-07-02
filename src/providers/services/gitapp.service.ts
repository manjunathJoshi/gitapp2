import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class GitAppService {
    public UserDetails: Object = {};
    public uname : string ='';

    constructor(public http: Http) { }

    makeRequest(uname) {
        let url = 'https://api.github.com/search/users?q=' + uname
        return this.http.get(url)
            .map(res => res.json());
    }
    makeRequestwithurl(url) {
        return this.http.get(url)
            .map(res => res.json());
    }

    setDetails(UserDetails) {
        this.UserDetails = UserDetails;
    }

    getUserDetails() {
        return this.UserDetails;
    }

    setUser(uname){
        this.uname = uname;
    }

    getUser(){
        return this.uname;
    }
    


}