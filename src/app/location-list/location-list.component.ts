import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  public locations: any;
  public date: any;
  public statuscode: any;
  public method: any;
  public consulted: any;
  public errorMessage;


  constructor(private _locationService:LocationService) { }

  ngOnInit() {
  }

  public onLocationSubmit(){
    console.log('locations_clicked');

    this._locationService.signup().subscribe(
      response => {
        console.log(response.locations.results)
        this.locations = response.locations.results;
        this.date = response.date;
        this.statuscode = response.statusCode;
        this.method = response.method;
        this.consulted = response.consulted;
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message;
          console.log(error);

        }

      }
    );
  }

}
