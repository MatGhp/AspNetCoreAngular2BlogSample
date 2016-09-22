//import * as ng from '@angular/core';
import {NgModule, Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import {Http} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {IPost, IComment} from '../../models/blog.model';
import {PostService} from '../../services/post.service';

@Component({
    template: require('./post-details.component.html')
    
})
export class PostDetailsComponent implements OnInit, OnDestroy
{
    public pageTitle: string = 'Post View'
    private _postId: number = -1;
    post = <IPost>{};
    comments = <IComment[]>{};

    private sub: any;
    ;
    constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router)
    {
    }
    ngOnInit(): void
    {
        this.sub = this._route.params
            .subscribe(params =>
            {
                this._postId = +params['id']; // (+) converts string 'id' to a number
                this.pageTitle += `: ${this._postId}`;
            });



        this._postService
            .getPost(this._postId)
            .subscribe(post =>
            {
                this.post = post;
            });
        //this._postService
        //    .getComments(this._postId)
        //    .subscribe(comments =>
        //    {
        //        this.comments = comments;
        //    });
    }

    ngOnDestroy(): void
    {
        this.sub.unsubscribe(); // we must unsubscribe before Angular destroys the component. Failure to do so could create a memory leak.
    }

    onBack(): void
    {
        this._router.navigate(['/post-list']);
    }
}