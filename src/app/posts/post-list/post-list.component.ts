import { Component, Input, OnInit, OnDestroy} from "@angular/core";

import { Post } from "src/app/post-model";
import { PostService } from "src/app/posts.service";
import {Subscription} from "rxjs";
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: [ 'post-list.component.css' ]
})
export class PostListComponent implements OnInit, OnDestroy{ 
    posts: Post[] = [];
    private subs: Subscription;
    constructor( public postsService: PostService){}

    ngOnInit(): void {
        this.posts = this.postsService.getPosts();
        this.subs = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
            this.posts = posts ;
        });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}