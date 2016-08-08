import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';

import { PostList} from './components/post-list/post-list';


export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'post-list', component: PostList },
    { path: '**', redirectTo: 'home' }
];
