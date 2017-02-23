import { Component, Injectable } from '@angular/core';
import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

    constructor( private http:Http){}

    getData() {
        debugger;
        let headers = new Headers();
        let params = new URLSearchParams();
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                '/app/auth/auth.json',
                {
                    search: params,
                    headers: headers
                }
            )
            .map(res => res.json())
            .map((res) => {
                return res;
            });
    }

}