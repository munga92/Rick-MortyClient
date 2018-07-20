import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';

import { CharacterlistComponent } from './characterlist/characterlist.component';
import { LocationListComponent } from './location-list/location-list.component';
import { EpisodelistComponent } from './episodelist/episodelist.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterlistComponent,
    LocationListComponent,
    EpisodelistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
