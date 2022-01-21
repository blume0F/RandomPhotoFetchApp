import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PhotoResponse{
  urls:{
    regular:string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotosService {

  constructor(private http:HttpClient) { }

  fetchPhoto(){
    return this.http.get<PhotoResponse>('https://api.unsplash.com/photos/random',{
      headers:{
        Authorization: 'Client-ID MfuP9h1o979Ft_jGKS0Jm1kH0r5skxnw0tla_QjHo3I'
      }
    })
  }
}
