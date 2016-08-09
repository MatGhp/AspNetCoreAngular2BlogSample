import * as ng from '@angular/core';
import { Http, Response } from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PostService} from './post.service';
import {IPost} from './Post';
import { Observable } from 'rxjs/Observable'

@ng.Component({
    selector: 'post-list',
    template: require('./post-list.html'),
    styles: ['thead {color: blue;}'],
    directives: [...ROUTER_DIRECTIVES]
})
export class PostList implements ng.OnInit
{
    public posts: IPost[];
    public pageTitle: string = "Post List";
    errorMessage: string;
    private _postService: PostService;
    constructor(http: Http)
    {
        //this._postService = new PostService(http);
        //this.posts = this._postService.getPosts();
        http.get('api/post')
            .map(data => <IPost[]>data.json())
            
            //.do(result => console.log(result)))
            //.catch(this.HandelError)
            //.map(res => <IPost[]>JSON.parse(res. toString())
            
            .subscribe(result =>
            {
                this.posts = result;
               
            });
    }
    private HandelError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    //constructor(private _postService: PostService)
    //{
    //    //this._postService = new PostService();
    //}

    ngOnInit(): void
    {
        //this._postService.getPosts()
        //    .subscribe(returnedPosts => this.posts = returnedPosts,
        //    returnedError => this.errorMessage = <any>returnedError);
        //this.posts =
        //    [
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

    }
}

//export interface IPost
//{
//    id: number;
//    title: string;
//    body: string;
//    userId: string;
//    username: string;
//    email: string;

//}