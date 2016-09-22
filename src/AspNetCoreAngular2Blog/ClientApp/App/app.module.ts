import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/posts/post-list.component';
import { PostDetailsComponent } from './components/posts/post-details.component';
import {AddCommentComponent} from './components/posts/add-comment.component';
import {PostService} from './services/post.service';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        PostListComponent,
        PostDetailsComponent,
        AddCommentComponent,
        HomeComponent
    ],
    providers: [PostService],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'post-list', component: PostListComponent },
            { path: 'post-Details', component: PostDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule
{
}