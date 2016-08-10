import * as ng from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavMenu } from '../nav-menu/nav-menu';
//import { IPost } from '../post-list/Post';
import { PostService } from '../posts/post.service';
//import { PostList } from '../post-list/post-list';
import { StarComponent } from '../shared/star';
import 'rxjs/Rx';

@ng.Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [...ROUTER_DIRECTIVES, NavMenu, StarComponent],
    providers: [
        PostService,
        HTTP_PROVIDERS
    ]
})
export class App {
}
