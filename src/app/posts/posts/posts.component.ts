import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {PostService} from '../../services/post.service';
import {Provincia} from '../../models/provincia';
import {ProvinciaService} from '../../services/provincia.service';
import {Municipio} from '../../models/municipio';
import {MunicipioService} from '../../services/municipio.service';
import {Localidad} from '../../models/localidad';
import {LocalidadService} from '../../services/localidad.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    public posts;
    public formHidden = true;
    provincias: Provincia[] = [];
    municipios: Municipio[] = [];
    localidades: Localidad[] = [];
    public modalSearch = null;

    public searchPost = {
        provincia_id: null,
        municipio_id: null,
        localidad_id: null,
        minPrice: null,
        maxPrice: null,
        bedrooms: null,
        bathrooms: null,
        currentPremiumPage: 1,
        currentBasicPage: 1,
        pageLimit: 21
    };

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private postService: PostService,
                private provinciaService: ProvinciaService,
                private municipioService: MunicipioService,
                private localidadService: LocalidadService,
                private modalService: NgbModal) {

        this.posts = new Object({
            premiums: {},
            basics: {},
        });

        this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    const arr = this.router.url.split('=');
                    if (arr[1] && !isNaN(parseInt(arr[1]))) {
                        this.searchPost.provincia_id = arr[1];
                    }
                }
            }
        );
    }

    ngOnInit() {
        this.getPosts();
        this.getProvincias();
    }

    toggleSearchForm(content): void {
        this.modalSearch = this.modalService.open(content, {size: 'lg'});
    }

    getPosts(): void {
        this.postService.getPosts(this.searchPost).subscribe(posts => this.posts = posts);
    }

    onSearch(): void {
        this.modalSearch.close();
        this.getPosts();
    }

    getProvincias(): void {
        this.provinciaService.getProvincias()
            .subscribe(provincias => this.provincias = provincias);
    }

    getMunicipios(): void {
        if (this.searchPost.provincia_id) {
            this.municipioService.getMunicipios(this.searchPost.provincia_id)
                .subscribe(municipios => this.municipios = municipios);
        }
    }

    getLocalidades(): void {
        if (this.searchPost.municipio_id) {
            this.localidadService.getLocalidades(this.searchPost.municipio_id)
                .subscribe(localidades => this.localidades = localidades);
        }
    }

    onPremiumPageChange(page: number): void {
        this.searchPost.currentPremiumPage = page;
        this.getPosts();
    }

    onBasicPageChange(page: number): void {
        this.searchPost.currentBasicPage = page;
        this.getPosts();
    }
}
