import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';
import { EpisodeService } from './services/episode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService, LocationService, EpisodeService]
})
export class AppComponent implements OnInit {
 
  public title = 'rick&morty';
  
  constructor(
  ){
  }

  ngOnInit(){
   
  }

}
