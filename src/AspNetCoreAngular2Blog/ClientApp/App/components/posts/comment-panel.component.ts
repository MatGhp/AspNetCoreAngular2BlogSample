import {NgModule, Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IPost, IComment} from '../../models/blog.model';

@Component({
selector: 'comment',
    template: require('./comment-panel.component.html')
})
export class CommentPanelComponent {

    @Input() comment = <IComment>{};

}

