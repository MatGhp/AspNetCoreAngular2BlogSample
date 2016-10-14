import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { PostListComponent } from './components/posts/post-list.component';
import { PostDetailsComponent } from './components/posts/post-details.component';
import { AddCommentComponent } from './components/posts/add-comment.component';
import { CommentPanelComponent } from './components/posts/comment-panel.component';
import { SignupFormComponent } from './components/users/signup-form.component';
import { LoginFormComponent } from './components/users/login-form.component';

import {PostService} from './services/post.service';
import {UserService} from './components/users/user.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        PostListComponent,
        PostDetailsComponent,
        AddCommentComponent,
        CommentPanelComponent,
        HomeComponent,
SignupFormComponent,
LoginFormComponent 
    ],
    providers:[PostService,UserService],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,         
         ReactiveFormsModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'posts', component: PostListComponent },
            { path: 'signup', component: SignupFormComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'posts/:postid', component: PostDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
