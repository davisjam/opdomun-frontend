import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {BeOneOfUsComponent} from './be-one-of-us/be-one-of-us.component';

@NgModule({
    declarations: [
        BeOneOfUsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule {
}
