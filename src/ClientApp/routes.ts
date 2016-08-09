import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';

import { PostList} from './components/post-list/post-list';
import {PostDetails} from './components/post-list/post-details';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'post-list', component: PostList },
    { path: 'post-details/:id', component: PostDetails },
    { path: '**', redirectTo: 'home' }
];
