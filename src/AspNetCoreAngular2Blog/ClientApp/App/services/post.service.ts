import {IPost, IComment} from '../models/blog.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService
{
    private _postUrl = '/odata/Posts'; //'/api/posts';
    public posts: IPost[];
    constructor(private _http: Http)
    {

    }
    getPosts(): Observable<IPost[]> {
        return this._http.get(this._postUrl)
            .map(this.extractData)
            .catch(this.HandelError);
    }

    getPost(postId: number): Observable<IPost>
    {
        return this._http.get(`${this._postUrl}/${postId}`)
            .map(this.extractData)
            .do(data => console.log("All : " + data))
            .catch(this.HandelError);
    }


   

    private extractData(res: Response) {
    let body = res.json();
    return body.value || { };
  }

    private HandelError(error: any)
    {
        console.log(error);
        return Observable.throw(error); //.json().error || 'Server Error');
    }
}