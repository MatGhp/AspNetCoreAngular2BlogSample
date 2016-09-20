import {Component,OnInit} from '@angular/core';
import { Http } from '@angular/http';
//import {PostService} from './post.service';
//import {IPost} from './Post';

@Component({
    selector: 'post-list',
    template: require('./post-list.component.html'),
    styles: ['thead {color: blue;}']
})
export class PostList implements OnInit
{
    public posts: IPost[];
    public pageTitle: string = "Post List";
    errorMessage: string;
    constructor(http: Http)
    {
        http.get('api/post')
            //.do(result => console.log(JSON.stringify(result)))
            .subscribe(result =>
        {
            this.posts = result.json();
        });
    }

    //private _postService: PostService;
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

export interface IPost
{
    id: number;
    title: string;
    body: string;
    userId: string;
    username: string;
    email: string;

}