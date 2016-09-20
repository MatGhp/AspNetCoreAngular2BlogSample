import * as ng from '@angular/core';
import { Http, Response } from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PostService} from './post.service';
import {IPost} from './Post';


@ng.Component({
    selector: 'post-list',
    template: require('./post-list.html'),
    styles: ['thead {color: blue;}'],
    directives: [...ROUTER_DIRECTIVES]
})
export class PostList implements ng.OnInit
{
    public pageTitle: string = "Post List";
    errorMessage: string;
    public posts: IPost[];

    constructor(private _postService: PostService)
    { }

    ngOnInit(): void
    {
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
            error => this.errorMessage = <any>error);
    }
}

