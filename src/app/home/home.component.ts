import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts : any = [];
  showPosts = true;
  postId = '';
  specificPost : any = {};
  postNotFound = false;
  comments : any = {};
  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getPosts().subscribe((response) => {
      this.posts = response;
    })
  }

  getPost(){
    this.jsonService.getPost(this.postId).subscribe((response) => {
      if(response !== {}){
        this.showPosts = false;
        this.specificPost = response;
      }
      else{
        this.postNotFound = true;
        setTimeout(() => {
          this.postNotFound = false;
        },3000)
      }
    },(error) => {
      this.postNotFound = true;
      setTimeout(() => {
        this.postNotFound = false;
      },3000)
    }
    )
  }

  backToPosts(){
    this.showPosts = true;
    this.specificPost = {};
  }

  getComments(id){
    if(id in this.comments){
      delete this.comments[id];
    }
    else{
      this.jsonService.getComments(id).subscribe((response) => {
        this.comments[id] = response;
      })
    }
  }

}
