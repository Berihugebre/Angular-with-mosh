import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  
  constructor(private service: PostService) { 
   
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value}
    this.service.createPost(post)
      .subscribe(res =>{
        post['id'] = res['id'];
        this.posts.splice(0, 0, post)
      },
      (error:Response) =>{
        if(error.status === 404){
          // this.form.setErrors(error.json())
        }
        else{
          alert('An expected error happen')
          console.log(error)
        }
      }
      )
    input.value=""
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(res=>{
        console.log(res)
      }, error =>{
        alert('An unexpected error occurred')
        console.log(error)
      })
  }

  deletePost(post){
    this.service.deletePost(345)
      .subscribe(res=>{
        let index = this.posts.indexOf(post)

        this.posts.splice(index, 1)
      },
      (error:Response) =>{
        if(error.status === 404){
          alert('the post has been deleted')
        }
        else{
          alert('An expected error happen')
          console.log(error)
        }
      }
      )
  }



}
