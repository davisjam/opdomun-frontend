import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post';
import {Localidad} from '../../../models/localidad';
import {environment} from '../../../../environments/environment';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
    providers: [NgbModal, NgbCarouselConfig]
})
export class PostDetailComponent implements OnInit {
    @Input() post: Post;
    public postId: number = null;
    public baseImgUrl = environment.baseImagesUrl + 'post_pictures/';
    public baseUserImgUrl = environment.baseImagesUrl + 'user_pictures/';
    public formGroup: FormGroup;

    showNavigationArrows = true;
    showNavigationIndicators = true;
    public images: any[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private postService: PostService,
                private location: Location,
                private formBuilder: FormBuilder,
                private modalService: NgbModal,
                config: NgbCarouselConfig) {

        this.postId = activatedRoute.snapshot.params['id'];

        // Customize default values of carousels used by this component
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        config.interval = 3000;
        config.wrap = true;
        config.pauseOnHover = true;
    }

    ngOnInit() {
        this.getPost();
    }

    private buildForm() {
        const summary = this.post.localidad.municipio.provincia.cod + ', ' +
            this.post.localidad.municipio.title + ', ' +
            this.post.localidad.title + ', ' +
            this.post.address + '.';
        this.formGroup = this.formBuilder.group({
            postId: this.postId,
            fullname: ['', [Validators.required, Validators.maxLength(80)]],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
            telephone: ['', [Validators.required, Validators.maxLength(30)]],
            summary: ['Estoy interesado en ' + summary, [Validators.maxLength(254)]]
        });
    }

    getPost(): void {
        const id = this.activatedRoute.snapshot.params['id'];
        this.postService.getPost(id).subscribe((post) => {
            this.post = post;
            this.buildForm();

            let tres = [];
            for (let i = 0; i < post.images.length; i++) {
                if (tres.length === 3) {
                    this.images.push(tres);
                    tres = [];
                }

                tres.push(post.images[i].url)

                if (i === (post.images.length - 1)) {
                    this.images.push(tres);
                }
            }
        });
    }

    open(content, postId) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    goBack(): void {
        this.location.back();
    }

    public sendComment(): void {
        const comment = this.formGroup.value;
        this.postService.sendComment(comment)
            .subscribe(() => this.goBack());
    }
}
