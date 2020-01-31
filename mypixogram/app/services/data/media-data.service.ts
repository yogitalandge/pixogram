import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from 'src/app/model/media.model';


const API_URL = "http://localhost:3000/media";

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {
  updateMedia(id: number, media: Media) {
    return this.http.put(API_URL + "/" + id, media);
  }
 
  getOneMedia(id: number) {
    return this.http.get(API_URL + "/" + id);
  }
  deleteMedia(id: number) {
    return this.http.delete(API_URL + "/" + id);

  }
  getAllMedia() {
    return this.http.get(API_URL);
  }
  
  addNewMedia(media:Media) {
    return this.http.post(API_URL, media);
  }
  

  constructor(public http : HttpClient) { 

  }
}
