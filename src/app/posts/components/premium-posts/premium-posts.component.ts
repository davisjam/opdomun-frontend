import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Post} from '../../../models/post';
import {NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {PostService} from '../../../services/post.service';


@Component({
    selector: 'app-premium-posts',
    templateUrl: './premium-posts.component.html',
    styleUrls: ['./premium-posts.component.scss'],
    providers: [NgbCarouselConfig]
})
export class PremiumPostsComponent implements OnInit {
    @Input() public posts;
    @Input() public pageLimit: number;
    @Output() public paginator = new EventEmitter<number>();

    public title = 'ANUNCIOS PREMIUN';
    public baseImagesUrl = environment.baseImagesUrl + 'post_pictures/';
    public post: Post;
    public showNavigationArrows = true;
    public showNavigationIndicators = true;
    public page = 1;

    constructor(private postService: PostService, private modalService: NgbModal, config: NgbCarouselConfig) {
        // Customize default values of carousels used by this component
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        config.interval = 3000;
        config.wrap = true;
        config.pauseOnHover = true;
    }

    ngOnInit() {
    }

    open(content, postId, imageId) {
        if (imageId) {
            this.postService.getPost(postId).subscribe((post) => {
                this.post = post;
                this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
            });
        }
    }

}
