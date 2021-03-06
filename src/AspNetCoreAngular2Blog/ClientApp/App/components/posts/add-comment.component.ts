﻿import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {IComment} from '../../models/blog.model';

@
Component({
    selector: 'add-comment',
    template: require('./add-comment.component.html'),
styles:[`form {
    padding:  10px;
    background: #ECF0F1;
    border-radius: 3px;
}`]

})
export class AddCommentComponent{
    @Input()
    postid: number;

    @Output()
    NewComment: EventEmitter<IComment> = new EventEmitter<IComment>();

    comment = <IComment>{};

constructor()
    {
        //this.comment= { body: 'bbbbxxxxxxxxxxxx', email: 'a@b.com', username: 'uuuu', id: 11, postId: 123 };
    }


    submitted = false;
    onSubmit()
    {
        this.submitted = true;
        this.NewComment.emit(this.comment);
        this.comment = null;
    }
    get diagnostic()
    {
        return JSON.stringify(this.comment);
    }
}