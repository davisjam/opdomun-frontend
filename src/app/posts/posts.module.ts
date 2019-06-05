import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts/posts.component';
import {PremiumPostsComponent} from './components/premium-posts/premium-posts.component';
import {BasicPostsComponent} from './components/basic-posts/basic-posts.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        PostsComponent,
        PremiumPostsComponent,
        BasicPostsComponent,
        PostDetailComponent
    ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbCarouselModule,
        NgbPaginationModule
    ]
})
export class PostsModule {
}
