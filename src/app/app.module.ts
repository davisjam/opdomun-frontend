import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';

import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AgentesComponent} from './agentes/agentes.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FaqComponent,
        AboutUsComponent,
        AgentesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
