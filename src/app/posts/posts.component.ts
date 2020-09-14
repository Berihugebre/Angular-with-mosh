import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { 
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value}
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(res =>{
        post['id'] = res['id'];
        this.posts.splice(0, 0, post)
      })
  }

  ngOnInit(): void {
  }

}
