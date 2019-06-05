import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

import {Provincia} from '../models/provincia';
import {ProvinciaService} from '../services/provincia.service';
import {AgenteService} from '../services/agente.service';

@Component({
    selector: 'app-agentes',
    templateUrl: './agentes.component.html',
    styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {
    public baseImagesUrl = environment.baseImagesUrl + 'user_pictures/';
    public agentes;
    provincias: Provincia[] = [];
    public provincia: number = null;
    public page: number = 1;
    public pageLimit: number = 24;


    constructor(private agenteService: AgenteService, private provinciaService: ProvinciaService) {
    }

    ngOnInit() {
        this.getAgentes();
        this.getProvincias();
    }

    getAgentes(): void {
        this.agenteService.getAgentes({
            provincia: this.provincia,
            page: this.page,
            pageLimit: this.pageLimit
        })
            .subscribe(agentes => this.agentes = agentes);
    }

    getProvincias(): void {
        this.provinciaService.getProvincias()
            .subscribe(provincias => this.provincias = provincias);
    }

    onProvinciaChange(): void {
        this.getAgentes();
    }

    onPageChange(): void {
        this.getAgentes();
    }

}
