import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

 

  getPosts(){
    return this.http.get(this.baseUrl+"posts");
  }

  getPost(id){
    return  this.http.get(this.baseUrl+"posts/"+id);
  }

  getComments(id){
    return  this.http.get(this.baseUrl+"posts/"+id+"/comments");
  }

  getUsers(){
    return this.http.get(this.baseUrl+"users");
  }

  getPhotos(){
    return this.http.get(this.baseUrl+"photos");
  }

  getTodos(){
    return this.http.get(this.baseUrl+"todos");
  }
}
