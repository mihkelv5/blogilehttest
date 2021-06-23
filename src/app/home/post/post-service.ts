import { Injectable } from '@angular/core';

import {Post} from './post';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private post: Post[] = [{"id": 5001, "headline": "HardcodedPost1", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"},
    {"id": 5002, "headline": "HardcodedPost2", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"},
    {"id": 5003, "headline": "HardcodedPost3", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"},
    {"id": 5004, "headline": "HardcodedPost4", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"},
    {"id": 5005, "headline": "HardcodedPost5", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"},
    {"id": 5006, "headline": "HardcodedPost6", "text": "See siin on üks postitus", "likes": 10, "dislikes": 20, "imgUrl": "https://picsum.photos/200/300"}];

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {
  }

  public getHardCodedPosts(): Observable<Post[]>{
    return of (this.post);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServerUrl}/post/all`);
  }

  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiServerUrl}/post/add`, post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiServerUrl}/post/update`, post);
  }

  public deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/post/delete/${postId}`);
  }

  public getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiServerUrl}/post/find/${postId}`)
  }

}
