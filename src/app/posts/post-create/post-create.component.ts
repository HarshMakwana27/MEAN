import { Component, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
 import { Post } from "src/app/post-model";
import { PostService } from "src/app/posts.service";


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
    
})
export class PostCreateComponent  {

    enteredTitle = '';
    enteredContent = '';
    postCreated = new EventEmitter<Post>(); 
    
    constructor(public postsServices: PostService){} ;
    onAddPost(form: NgForm){
        if(form.invalid){
            return;
        }
        
    this.postsServices.addPosts(form.value.title, form.value.content);
        form.resetForm();

    }

}