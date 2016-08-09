//import * as ng from '@angular/core';
//import {Component, Pipe, PipeTransform
import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import _ = require('lodash');
import {Http} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {IPost, IComment} from './Post';


@Component({
    template: require('./post-details.html')
})
export class PostDetails implements OnInit, OnDestroy
{
    private _id: number = -1;
    private post: IPost;
    private sub: any;
    public pageTitle: string = 'Post View';
    constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http)
    {
    }
    ngOnInit(): void
    {
        this.sub = this._route.params
            .subscribe(params =>
            {
                this._id = +params['id']; // (+) converts string 'id' to a number
                this.pageTitle += `: ${this._id}`;
            });

        this._http.get(`api/post/${this._id}`)
            //.do(result => console.log(JSON.stringify(result)))
            //.map(data => <IPost>data.json())
            //.map((post) => <IComment>post.comments.json()) 
            .map(data => <IPost>data.json())
            .subscribe(content =>
            {
                this.post = content;
                //this.post.comments = content.comments as IComment[]
                console.log('comments: '+JSON.stringify(content.comments as IComment[]))
                    //_.chain(_.toPairs(JSON.parse(content.toString())))
                    //.filter(p => _.has(p[1], 'types'))
                    //.map(p =>
                    //{
                    //    var id = p[0];
                    //    var typeNameVotePairs = _.chain(_.toPairs(p[1].types));
                    //    // paperId, typeName, and number of yays
                    //    return typeNameVotePairs
                    //        .filter(tv => _.has(tv[1], 'yays'))
                    //        .map(tv => [id, tv[0], _.size(tv[1].yays)])
                    //        .valueOf();
                    //})
                    //.flatten(true);
                //.forEach(triple =>
                //{
                //    console.log(triple.join('\t'));
                //});
                //this.post = result;
                //console.log('comments: '+JSON.stringify(result.json().comments as IComment[]))
                //this.post.comments = result.json().comments.json();
            });

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