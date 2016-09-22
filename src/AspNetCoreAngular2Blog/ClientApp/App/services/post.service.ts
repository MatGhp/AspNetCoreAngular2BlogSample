import {IPost, IComment} from '../models/blog.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService
{
    private _postUrl = '/api/post';
    private _commentUrl = '/api/comment';
    public posts: IPost[];
    constructor(private _http: Http)
    {

    }
    getPosts(): Observable<IPost[]>
    {
        return this._http.get(this._postUrl)
            .map((response: Response) => <IPost[]>response.json())
            .do(data => console.log("All : " + JSON.stringify(data)))
            .catch(this.HandelError);
    }

    getPost(postId: number): Observable<IPost>
    {
        return this._http.get(this._postUrl + `/${postId}`)
            .map((response: Response) => <IPost>response.json())
            .do(data => console.log("All : " + JSON.stringify(data)))
            .catch(this.HandelError);
    }


    //getComments

    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || {};
    }

    private HandelError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    //getPosts(): IPost[]
    //{
    //    return [
    //        {
    //            "id": 1,
    //            "title": "Title 1...",
    //            "body": "body text 1 ....",
    //            "userId": "11",
    //            "username": "John",
    //            "email": "john@gmail.com"

    //        },
    //        {
    //            "id": 2,
    //            "title": "Title 2..",
    //            "body": "body text 2....",
    //            "userId": "12",
    //            "username": "David",
    //            "email": "david@yahoo.com"
    //        }
    //    ];
    //}

}