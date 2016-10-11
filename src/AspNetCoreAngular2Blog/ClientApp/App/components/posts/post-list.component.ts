import * as ng from '@angular/core';
import { Http, Response } from '@angular/http';
//import {ROUTER_DIRECTIVES} from '@angular/router';
import {PostService} from '../../services/post.service';
import {IPost} from '../../models/blog.model';


@ng.Component({
    selector: 'post-list',
    template: require('./post-list.component.html'),
    styles: ['thead {color: blue;}'],
    
})
export class PostListComponent implements ng.OnInit
{
    public pageTitle: string = "Post List";
    errorMessage: string;
    public posts: IPost[];

    constructor(private _postService: PostService)
    { }

    ngOnInit(): void {
        this._postService.getPosts()
            .subscribe((posts) => {
                    this.posts = <IPost[]>posts;
                },
                    (error) => {
                    this.errorMessage = <any>error;
                    console.log(error);
                }
            );
    }

  get diagnostic()
    {
        return JSON.stringify(this.posts);
    }
}

