import * as ng from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavMenu } from '../nav-menu/nav-menu';
import { PostList } from '../blog-posts/post-list';
import { StarComponent } from '../shared/star';

@ng.Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [...ROUTER_DIRECTIVES, NavMenu, PostList, StarComponent]
})
export class App {
}
