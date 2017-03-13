import { Component, Injectable } from '@angular/core';



@Injectable()
export class User {

    private user:IUserModel;
    constructor(){}

    setUser(user):void {
       this.user = {
            id: user.id,
           name: user.name,
           token: user.token
       };
    }


    getUser() {
        return this.user;
    }
}

export interface IUserModel {
    id: number|string;
    name:string;
    token:string;
}