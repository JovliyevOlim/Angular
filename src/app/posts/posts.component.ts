import {
  Component,
  OnInit,
} from '@angular/core';

import { NotFoundError } from '../not-found-error';
import { PostsService } from '../posts.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private postsSvc: PostsService) {



  }
  ngOnInit(): void {
    this.postsSvc.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert('Kutilmagan xato ro\'y berdi');
          console.log(error)
        })
  }
  createPost(title: HTMLInputElement) {
    let post = new Post
    post.title = title.value
    this.posts.splice(0, 0, post)
    title.value = ''
    this.postsSvc.createPost(post)
      .subscribe(
        response => {
          console.log(response)
        },
        (error:Response) => {
          if(error.status === 400){

          }
          else{
            alert('Kutilmagan xato ro\'y berdi');
            console.log(error)
          }

        })
  }

  updatePost(post: Post) {
    this.postsSvc.updatePost(post)
      .subscribe({  next:(res) => {
          console.log(res)
        },
        error:(err) => {
          alert('Kutilmagan xato ro\'y berdi');
          console.log(err)
        }})
  }
  deletePost(post: Post) {
    let index = this.posts.indexOf(post);
    this.postsSvc.deletePost(post).pipe()
      .subscribe({
        next:(response) => {
          this.posts.splice(index, 1)
          console.log(response)
        },
         error:(error) => {
          console.log('gr')
           if(error instanceof NotFoundError){
            alert('Bu post serverda mavjud emas')
           }
           else{
            alert('Kutilmagan xato ro\'y berdi');
            console.log(error)
           }
      }


        })
  }
}
