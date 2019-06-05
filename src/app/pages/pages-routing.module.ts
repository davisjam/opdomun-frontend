import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BeOneOfUsComponent} from './be-one-of-us/be-one-of-us.component';

const routes: Routes = [
    {path: 'be_one_of_us', component: BeOneOfUsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
