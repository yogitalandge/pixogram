import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaDataService } from 'src/app/services/data/media-data.service';
import { Media } from 'src/app/model/media.model';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.css']
})
export class MediaAddComponent implements OnInit {

  constructor(public mediaService: MediaDataService, public router : Router) { }

  ngOnInit() {
  }
  
  
  saveMedia(txtName:HTMLInputElement, txtCategory:HTMLInputElement, txtCost:HTMLInputElement):void{
    
    let media = new Media(txtName.value, txtCategory.value, parseInt(txtCost.value));
  
    // need to send it to server using product Data Service
    this.mediaService.addNewMedia(media).subscribe(
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