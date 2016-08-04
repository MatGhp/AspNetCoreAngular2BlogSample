import * as ng from '@angular/core';

@ng.Component({
    selector: 'post-list',
    template: require('./post-list.html')
})
export class PostList
{
    pageTitle: string = "Post List";
}