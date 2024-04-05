import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { Post } from './posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Array<Post>>(this.url);
  }
  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post)
  }
  public updatePost(post: Post): Observable<Object> {
    return this.http.patch<Post>(this.url + "/" + post.id, JSON.stringify(post.title))
  }
  public deletePost(post:Post): Observable<Object> {
    return this.http.delete(this.url + "/" + 999).pipe(
          catchError((error:Response)=> {
              if (error.status === 400) {
                return throwError(()=>new NotFoundError(error))

              }

               return throwError(()=>new AppError(error))
          })
    )

  }
}
