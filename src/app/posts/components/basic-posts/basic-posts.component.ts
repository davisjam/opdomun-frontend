import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Post} from '../../../models/post';

@Component({
    selector: 'app-basic-posts',
    templateUrl: './basic-posts.component.html',
    styleUrls: ['./basic-posts.component.scss']
})
export class BasicPostsComponent implements OnInit {
    @Input() public posts;
    @Input() public pageLimit: number;
    @Output() public paginator = new EventEmitter<number>();

    public title = 'ANUNCIOS BASICOS';
    public baseImagesUrl = environment.baseImagesUrl + 'post_pictures/';
    public page = 1;

    constructor() {
    }

    ngOnInit() {
    }

}
