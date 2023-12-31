import { Injectable } from "@angular/core";
import { Post } from "./post-model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})

export class PostService {
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>(); 

    getPosts(){
        return this.posts;
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    addPosts(title: String, content:String){
        const post: Post = {title: title, content: content}
        this.posts.push(post);
        this.postUpdated.next([...this.posts])
    }   

}