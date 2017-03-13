import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'
import { User } from './user'


@Component({
    selector: 'auth',
    templateUrl: 'app/auth/auth.component.html',
    providers: [ AuthService ]

})
export class AuthComponent implements OnInit {

    result:boolean = false;
    error:any = {};

    constructor(private authService:AuthService) {}

    ngOnInit() {
        this.canActivate();
    }


    canActivate() {
        let result,
            self = this;
        this.authService.getRights().subscribe(
            data => {
                result = data;
                if(result == 0) {
                    self.result = true;
                    //тут метод который необходимо выполнить если авторизован
                }

            },
             err => {
                 self.error = err;
             });

    }



}