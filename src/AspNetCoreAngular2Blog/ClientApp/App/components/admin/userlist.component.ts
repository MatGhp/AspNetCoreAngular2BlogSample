import {Component,OnInit, OnChanges} from '@angular/core';
import { Http, Response } from '@angular/http';
import {IUser,IUserProfile} from '../../models/user.model';
import {AdminService} from './admin.service';
import {UserlistRowComponent} from './shared/userlist-row.component';

@
Component({
    selector: 'user-list',
    template: require('./userlist.component.html'),
    styles: [require('./userlist.component.css')]
//entryComponents : [UserListRowComponent]
})
export class UserListComponent{
    public pageTitle: string = "User Management";
    errorMessage: string;
    public users : IUser[];
    


public searchString: string;

    constructor(private _adminService: AdminService) {
        this.searchString = "";
        this._adminService.getUsers()
            .subscribe((users) => {
                    this.users = <IUser[]>users;
                    console.log(users);
                },
                (error) => {
                    this.errorMessage = <any>error;
                    console.log(error);
                }
            );
    }

    searchUsers(input : string) {

        console.log('Searching: ' + input);
        this._adminService.searchUsers(input)
            .subscribe((users) => {
                    this.users = <IUser[]>users;
                    console.log(users);
                },
                (error) => {
                    this.errorMessage = <any>error;
                    console.log(error);
                }
            );
        console.log('Searched: ' + JSON.stringify(this.users));
    }


    get diagnostic() {
        return JSON.stringify(this.users);
    }

   
}