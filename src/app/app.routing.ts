import { ModuleWithProviders } from '@angular/core';
import { CharacterlistComponent } from './characterlist/characterlist.component';




// const appRoutes: Routes = [
//     {path: }
// ]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'

const routes: Routes = [
    
    
     {
         path: 'characters',
         component: CharacterlistComponent,
     },
    // {
    //     path: 'locations',
    //     component: Location-listComponent,
    // }
    // {
    //     path:'profile-setting',
    //     component:ProfileSettingComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }