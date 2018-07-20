import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service'

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {

  public characters: any;
  public date: any;
  public statuscode: any;
  public method: any;
  public consulted: any;
  public errorMessage;

  constructor(private _characterService:CharacterService) { }

  ngOnInit() {
  }

  public onCharactersSubmit(){
    console.log(' characters clicked');

    
    this._characterService.signup().subscribe(
      response => {

        console.log(response.characters.results)
        console.log(response.date)
        this.characters = response.characters.results;
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

