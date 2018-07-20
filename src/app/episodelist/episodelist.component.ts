import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../services/episode.service'

@Component({
  selector: 'app-episodelist',
  templateUrl: './episodelist.component.html',
  styleUrls: ['./episodelist.component.scss']
})
export class EpisodelistComponent implements OnInit {

  public episodes: any;
  public date: any;
  public statuscode: any;
  public method: any;
  public consulted: any;
  public errorMessage;

  constructor(private _episodeService:EpisodeService) { }

  ngOnInit() {
  }

  public onEpisodeSubmit(){
    console.log('episodes clicked');

    
    this._episodeService.signup().subscribe(
      response => {

        console.log(response.episodes.results)
        console.log(response.date)
        this.episodes = response.episodes.results;
        this.date = response.date;
        this.statuscode = response.statusCode;
        this.method = response.date;
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
