import {Component} from '@angular/core';
import {IComment} from '../../models/blog.model';
//import { NgForm, Validators } from '@angular/forms';
//import Bootclient = require("../../../boot-client");

@Component({
    selector: 'add-comment',
    template: require('./add-comment.component.html')
})
export class AddCommentComponent
{
    comment: IComment;
    constructor()
    {
        this.comment= { body: 'bbbbxxxxxxxxxxxx', email: 'a@b.com', username: 'uuuu', id: 11, postId: 123 };
    }
    submitted = false;
    onSubmit()
    {
        this.submitted = true;
    }
    get diagnostic()
    {
        return JSON.stringify(this.comment);
    }
}