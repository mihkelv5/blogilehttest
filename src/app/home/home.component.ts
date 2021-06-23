import { Component, OnInit } from '@angular/core';
import {Post} from "./post/post";
import {PostService} from "./post/post-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened: boolean = false;
  posts: Post[] = [];

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts()
  }

  public getPosts(): void {
    this.postService.getPosts().subscribe((response) => {
      this.posts = this.posts.concat(response)
    });
    this.postService.getHardCodedPosts().subscribe((response) => {
      this.posts = this.posts.concat(response)
    })

  }


  scrollToElement(elementId: string): void{
    const element = document.getElementById(elementId) || document.getElementsByName(elementId)[0];
    element.scrollIntoView({behavior: "smooth", block: "end"});
  }

  toggleMenu() {
    var page = document.getElementById('main-page')
    this.opened = !this.opened
    if (page != null) {

      if (this.opened) {
        page.style.marginLeft = "15%";
      }
      if (!this.opened) {
        page.style.marginLeft = "0%";
      }
    }
  }



}
