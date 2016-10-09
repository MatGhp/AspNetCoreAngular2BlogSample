import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { PostListComponent } from './components/posts/post-list.component';
import { PostDetailsComponent } from './components/posts/post-details.component';

import {PostService} from './services/post.service';
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        PostListComponent,
PostDetailsComponent,
        HomeComponent
    ],
    providers:[PostService],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'posts', component: PostListComponent },
            { path: 'posts:/postid', component: PostListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
