import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  userDetails: any;

  constructor(private _apiService : ApiService) { }

  ngOnInit() {
    this._apiService.getFeedPage().subscribe(
      (response : any) => {
        this.userDetails = response 
        console.log(this.userDetails)
      }, error => {
        console.log("getFeedPage API error",error)
      }
    )
  }

}
