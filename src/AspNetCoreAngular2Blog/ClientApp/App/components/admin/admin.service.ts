import {IPost, IComment} from '../../models/blog.model';
import {IUser, IUserProfile} from '../../models/user.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
    private _adminUrl = '/api/admin';
    public users: IUser[];

    constructor(private _http: Http) {

    }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._adminUrl)
            .map(response => response.json())
            .catch(this.HandelError);
    }

 searchUsers(searchString : string): Observable<IUser[]> {
        return this._http.get(`${this._adminUrl}/SearchUsers?SearchPattern=${searchString}`)
            .map(response => response.json())
            .catch(this.HandelError);
    }

    //getUser(userId: number): Observable<IUser>
    //{
    //    return this._http.get(`${this._adminUrl}/${userId}`)
    //        .map(this.extractData)
    //        .do(data => console.log("All : " + data))
    //        .catch(this.HandelError);
    //}


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private HandelError(error: any) {
        console.log(error);
        return Observable.throw(error);
    }
}