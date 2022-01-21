import { Component, OnInit } from '@angular/core';
import { FetchPhotosService } from '../fetch-photos.service';
import { PhotoResponse } from '../fetch-photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photoUrl:string;

  constructor(private fetchPhotos:FetchPhotosService) { }

  ngOnInit(): void {
    this.fetchRandomPhoto();
  }

  fetchRandomPhoto(){
    this.fetchPhotos.fetchPhoto().subscribe((res)=>{
      this.photoUrl=res.urls.regular
    })
  }

}
