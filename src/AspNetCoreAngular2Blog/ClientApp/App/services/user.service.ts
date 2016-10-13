import {IPost, IComment} from '../models/blog.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IUser,IUserProfile} from '../models/user.model';

@Injectable()
export class UserService {
constructor(private _http: Http) {
    
}

    signup() {}

    signin() {}

    getUserProfile() {}

}
