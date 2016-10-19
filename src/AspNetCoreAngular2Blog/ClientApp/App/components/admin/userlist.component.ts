import {Component,OnInit, OnChanges, AfterViewChecked, HostListener} from '@angular/core';
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
export class UserListComponent implements OnInit {
    public pageTitle: string = "User Management";
    errorMessage: string;

    public sourceData: IUser[];
    public displayData: IUser[];


    public searchString: string;

    constructor(private _adminService: AdminService) {

    }

    ngOnInit(): void {
        this.searchString = "";
        this.sourceData = [];
        this.displayData = [];
        this.loadAllUsers();
    }

    loadAllUsers() {
        this._adminService.getUsers()
            .subscribe((users) => {
                    this.sourceData = <IUser[]>users;
                },
                (error) => {
                    this.errorMessage = <any>error;
                    console.log(error);
                }
            );

    }

    searchUsers(input: string) {
        if (input != '') {
            console.log('Searching: ' + input);
            this._adminService.searchUsers(input)
                .subscribe((users) => {
                        this.sourceData = <IUser[]>users;
                    },
                    (error) => {
                        this.errorMessage = <any>error;
                        console.log(error);
                    }
                );
            console.log('Searched: ' + JSON.stringify(this.sourceData));
        } else {
            this.loadAllUsers();
        }
    }


    get diagnostic() {
        return JSON.stringify(this.sourceData);
    }
}