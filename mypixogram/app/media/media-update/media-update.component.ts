import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaDataService } from 'src/app/services/data/media-data.service';
import { Media } from 'src/app/model/media.model';

@Component({
  selector: 'app-media-update',
  templateUrl: './media-update.component.html',
  styleUrls: ['./media-update.component.css']
})
export class MediaUpdateComponent implements OnInit {
  mediaId : number;
 media : Media;

  // dependecy on Media Data Service
  constructor(public activatedRoute : ActivatedRoute, public mediaService : MediaDataService, public router : Router) { 
    // need to get the id from url
    this.activatedRoute.params.subscribe((parameter) => this. mediaId = parameter["mediaId"]);
  }

  ngOnInit() {
    // need to fetch data of a given id
    this.mediaService.getOneMedia(this. mediaId).subscribe((response:any) => this.media = response);
  }



  updateMedia(txtName:HTMLInputElement, txtCategory:HTMLInputElement, txtCost:HTMLInputElement):void{
    
    // create a product object of updated info
    let product = new Media(txtName.value, txtCategory.value, parseInt(txtCost.value));

    // need to send it to server using product Data Service
    this.mediaService.updateMedia(this. mediaId, this.media).subscribe(
      (response) => {
        console.log(response);
        // navigate to product-list
        this.router.navigate(['/media']);
      });


    // reset the form
    txtName.value = "";
    txtCategory.value = "";
    txtCost.value = "";

    
}

}