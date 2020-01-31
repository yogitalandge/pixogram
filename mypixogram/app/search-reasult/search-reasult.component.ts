import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-reasult',
  templateUrl: './search-reasult.component.html',
  styleUrls: ['./search-reasult.component.css']
})
export class SearchReasultComponent implements OnInit {
  searchData : string;

  constructor(public activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((parameter) => this.searchData = parameter["searchText"]);
   }

  ngOnInit() {
  }

}
