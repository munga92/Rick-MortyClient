import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';
import { EpisodeService } from './services/episode.service';
import { LogService } from './services/log.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService, LocationService, EpisodeService, LogService]
})
export class AppComponent implements OnInit {
 
  

  public title = 'rick&morty';
  public errorMessage;
  public logs: any;

  constructor(private _logService:LogService
  ){
   
  }

  ngOnInit(){
    console.log('logs_clicked');

    this._logService.signup().subscribe(
      response => {
        this.logs = response.logs;
        console.log(response.logs)
        
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

  public OnLogSubmit(){
    
  }


}
