import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "./post";
import {PostService} from "./post-service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  public post: Post = {} as Post;
  @Input()
  public postService: PostService = {} as PostService;


  constructor() { }

  ngOnInit(): void {

  }

  like(post: Post): void { //works only on one client at a time
    post.likes = post.likes + 1
    this.postService.updatePost(post).subscribe()
  }

  dislike(post: Post): void {
    post.dislikes = post.dislikes + 1
    this.postService.updatePost(post).subscribe()
  }

  deletePost(post: Post): void{
    if(confirm("Kas Sa oled kindel, et soovid kustutada postitust : " +post.headline  + " ?"
     + "\n(ei tööta hardcoded postituste puhul)")){
      this.postService.deletePost(post.id).subscribe();
      window.location.reload();
    }

  }

}
