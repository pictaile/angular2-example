import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'


@Component({
    selector: 'auth',
    templateUrl: 'app/auth/auth.component.html',
    providers: [ AuthService ]

})
export class AuthComponent implements OnInit {

    result:any = {
        name:'',
        age:''
    };

    constructor(private service:AuthService) {}

    ngOnInit() {
        this.getData();
    }


    getData() {
        self = this;
        this.service
            .getData()
            .subscribe(
                res => {
                    self.result = res;
                })
    }

}