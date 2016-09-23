import {Component} from '@angular/core';
import {IComment} from '../../models/blog.model';
import { NgForm, Validators } from '@angular/forms';
@Component({
    selector: 'add-comment',
    template: require('./add-comment.component.html')
})
export class AddCommentComponent
{
    comment: IComment;
    constructor()
    {
        this.model= { body: 'bbbbxxxxxxxxxxxx', email: 'a@b.com', username: 'uuuu', id: 11, postId: 123 };
    }
    submitted = false;
    onSubmit(form : NgForm)
    {
        this.submitted = true;
    }
    get diagnostic()
    {
        return JSON.stringify(this.model);
    }
}