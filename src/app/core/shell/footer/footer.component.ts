import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public isHome = false;

    constructor(private router: Router) {
        this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    if (this.router.url === '/') {
                        this.isHome = true;
                    } else {
                        this.isHome = false;
                    }
                }
            }
        );
    }

    ngOnInit() {
    }

}
