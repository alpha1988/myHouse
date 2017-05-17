import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {Building} from './building/building.module';

const appRoutes: Routes = [
  {
    path:'building',

  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
