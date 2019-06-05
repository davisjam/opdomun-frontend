import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public activeRoute: any = '';

    constructor(private activatedRoute: ActivatedRoute) {
        this.activeRoute = activatedRoute.pathFromRoot;

    }

    ngOnInit() {
    }

}
