import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any = [];
  photosToShow : any = [];
  currentCount = 100;
  constructor(private jsonservice : JsonService) { }

  ngOnInit(): void {
    this.jsonservice.getPhotos().subscribe((response) => {
      this.photos = response;
      for(let i=0;i<this.currentCount;i++){
        this.photosToShow.push(this.photos[i]);
      }
    });
  }

  next(){
    if(this.currentCount < 5000){
      this.currentCount = this.currentCount + 100;
      this.updatePhotos();
    }
  }

  previous(){
    if(this.currentCount > 100){
      this.currentCount = this.currentCount - 100;
      this.updatePhotos();
    }
  }

  updatePhotos(){
    this.photosToShow = [];
    for(let i=this.currentCount-100;i<this.currentCount;i++){
      this.photosToShow.push(this.photos[i]);
    }
  }

}
