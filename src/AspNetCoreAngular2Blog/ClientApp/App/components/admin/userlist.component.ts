import {Component,OnInit, OnChanges, AfterViewChecked, HostListener} from '@angular/core';
import { Http, Response } from '@angular/http';
import {IUser,IUserProfile} from '../../models/user.model';
import {AdminService} from './admin.service';
import {UserlistRowComponent} from './shared/userlist-row.component';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


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


    searchTerm$ = new Subject<string>();

    constructor(private _adminService: AdminService) {
        loadAllUsers();
        this.searchTerm$
            .debounceTime(600)
            .distinctUntilChanged()
            .switchMap(term => term.length > 0 ? this._adminService.searchUsers(term) : this._adminService.getUsers())
            .subscribe(users => this.sourceData = <IUser[]>users);
    }

    ngOnInit(): void {
        this.sourceData = [];
        this.displayData = [];
        
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

    //searchUsers(input: string) {
    //    if (input != '') {
    //        console.log('Searching: ' + input);
    //        this._adminService.searchUsers(input)
    //            .subscribe((users) => {
    //                    this.sourceData = <IUser[]>users;
    //                },
    //                (error) => {
    //                    this.errorMessage = <any>error;
    //                    console.log(error);
    //                }
    //            );
    //        console.log('Searched: ' + JSON.stringify(this.displayData));
    //    } else {
    //        this.loadAllUsers();
    //    }
    //}


    get diagnostic() {
        return JSON.stringify(this.sourceData);
    }
}