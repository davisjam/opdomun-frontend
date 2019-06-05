import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ShellComponent} from './shell/shell.component';
import {HeaderComponent} from './shell/header/header.component';
import {MainComponent} from './shell/main/main.component';
import {FooterComponent} from './shell/footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        ShellComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ShellComponent]
})
export class CoreModule {
}
