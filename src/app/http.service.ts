import { Post } from './modules/post';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  getPostsByUserId(userId: number): Observable<Array<Post>> {
    const httpParams = new HttpParams().set('userId', userId.toString());
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts?userId=', { params: httpParams });
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts/', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  getPostsWithError(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/xyxz');
  }


  getwWeatherforecast(): Observable<any> {
    return this.http.get<any>('http://konradtest.aspnet.pl/weatherforecast');
  }

  getwWeatherforecast2(): Observable<any> {
    return this.http.get<any>('https://www.konradmurach.aspnet.pl/weatherforecast');
  }


}
