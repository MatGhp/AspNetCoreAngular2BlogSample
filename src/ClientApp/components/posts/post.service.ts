import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import {IPost, IComment} from './Post';


@Injectable()
export class PostService
{
    private _postUrl = '/api/posts';
    private _addPostUrl = '';
    private _addCommentUrl = '';
    private _commentsUrl = '';
    //private _getCommentsUrl = '/api/posts/${}/GetComments';

    constructor(private _http: Http){ }

    getPosts(): Observable<IPost[]>
    {
        return this._http.get(this._postUrl)
            .map((response: Response) => <IPost[]>response.json())
            .do(result => console.log("Received Posts: "+JSON.stringify(result)))
            .catch(this.HandelError);
    }

    getPost(postId: number): Observable<IPost>
    {
        return this._http.get(`${this._postUrl}/${postId}`)
            .map((response: Response) => <IPost>response.json())
            .do(result => console.log("Received Posts: " + JSON.stringify(result)))
            .catch(this.HandelError);
    }

    getComments(postId: number): Observable<IComment[]>
    {
        let url = `${this._postUrl}/${postId}/Comments`;
        console.log("loading comments from:  " + url)
        return this._http.get(url)
            .map((response: Response) => <IComment[]>response.json())
            .do(result => console.log("Received Comments: " + JSON.stringify(result)))
            .catch(this.HandelError);
    }

    addPost(post: IPost): Observable<IPost>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._addPostUrl, JSON.stringify(post), options)
            .map((response: Response) => <IPost>response.json())
            .do(post => "New post added to repository: " + post)
            .catch(this.HandelError);
    }

    private HandelError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
    //im memory sample data
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