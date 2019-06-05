import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AgentesComponent} from './agentes/agentes.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        loadChildren: './posts/posts.module#PostsModule'
    },
    {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
    },
    {path: 'agentes', component: AgentesComponent},
    {path: 'about_us', component: AboutUsComponent},
    {path: 'faq', component: FaqComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
