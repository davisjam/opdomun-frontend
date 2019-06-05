import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {Provincia} from '../models/provincia';
import {ProvinciaService} from '../services/provincia.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    provincias: Provincia[] = [];
    public provincia: number = null;

    constructor(private provinciaService: ProvinciaService,
                private router: Router) {
    }

    ngOnInit() {
        this.getProvincias();
    }

    getProvincias(): void {
        this.provinciaService.getProvincias()
            .subscribe(provincias => this.provincias = provincias);
    }

    getPosts(): void {
        if (this.provincia) {
            this.router.navigate(['/posts'], {queryParams: {tmp: this.provincia}});
        }
    }

}
