import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { Post } from './modules/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular-http';

  constructor(private httpService: HttpService) { }


  myPosts: Array<Post> = [];
  getPostText?: number;
  getPostsByUserIdText?: number;
  allPosts$!: Observable<Array<Post>>;
  //allPosts$: Observable<Post[]> = of([]);

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.myPosts = posts;
      console.log(posts);
    });
    this.allPosts$ = this.httpService.getPosts();
  }

  getPost() {
    if (this.getPostText == null) {
      return;
    }
    this.httpService.getPost(this.getPostText).subscribe(post => {
      this.myPosts.push(post);
      console.log(post);
    });
  }

  getPostsByUserId() {
    if (this.getPostsByUserIdText == null) {
      return;
    }
    this.httpService.getPostsByUserId(this.getPostsByUserIdText).subscribe(posts => {
      this.myPosts = posts;
      console.log(posts);
    });
  }

  addPost() {
    const myPost = this.getNewPost();
    this.httpService.addPost(myPost).subscribe(post => {
      this.myPosts.push(post);
      console.log(post);
    });
  }

  updatePost() {
    const myPost = this.getNewPost();
    this.httpService.updatePost(myPost).subscribe(post => {
      this.myPosts.push(post);
      console.log(post);
    });
  }

  changePost() {
    const myPost: Post = ({
      id: 1,
      body: 'Mój pierwszy post'
    });
    this.httpService.changePost(myPost).subscribe(post => {
      this.myPosts.push(post);
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostsWithError() {
    this.httpService.getPostsWithError().subscribe(posts => {
      console.log(posts);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    });
  }

  getNewPost(): Post {
    const post: Post = ({
      userId: 1,
      id: 1,
      title: 'Mój post',
      body: 'Mój pierwszy post'
    });
    return post;
  }


  getwWeatherforecast() {
    this.httpService.getwWeatherforecast().subscribe(posts => {
      console.log(posts);
    });
  }

  getwWeatherforecast2() {
    this.httpService.getwWeatherforecast2().subscribe(posts => {
      console.log(posts);
    });
  }
}
