import {Component} from '@angular/core';
import {IComment} from '../../models/blog.model';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'add-comment',
    template: require('./add-comment.component.html')
})
export class AddCommentComponent
{
    model: IComment;
    constructor()
    {
        this.model= { body: 'bbbb', email: 'a@b.com', username: 'uuuu', id: 11, postId: 123 };
    }
    submitted = false;
    onSubmit()
    {
        this.submitted = true;
    }
    get diagnostic()
    {
        return JSON.stringify(this.model);
    }
}