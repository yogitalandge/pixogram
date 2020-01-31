import { Component, OnInit } from '@angular/core';
import { MediaDataService } from 'src/app/services/data/media-data.service';
import { Router } from '@angular/router';
import { Media } from 'src/app/model/media.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

 media : Array<Media>; // will be initilized from data coming from server

 
  // dependent on media-data-service
  constructor(private mediaService : MediaDataService, public router : Router) { 

  }

  add(){
    // navigate to media-add component
    this.router.navigate(['/media-add']);
  }

  update(id:number){
    // navigate to update Component (associate id also)
    this.router.navigate(['/media-update/' + id]);
  }

  delete(id:number){
    // call media data service to delete
    this.mediaService.deleteMedia(id).subscribe((response) => {
        console.log(response);
        // call getAllMedia (selective loading)
        this.mediaService.getAllMedia().subscribe((response:any) => this.media = response);
        
        // navigate to same component (caching issues)
        // this.router.navigate(['/media']);
    });
  }



  ngOnInit() {
    // load data from server on initialization
    // need to call getAllMedia() method of MediaDataService
    // this.media = this.mediaService.getAllMedia();
    // response : response data from server : Array of media
    this.mediaService.getAllMedia().subscribe((response:any) => this.media = response);
  }

}