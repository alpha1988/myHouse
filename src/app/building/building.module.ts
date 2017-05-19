import { NgModule } from '@angular/core';

import { BuildingRoutingModule } from "./building-routinng.module";
import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from "./building-detail/building-detail.component";

@NgModule({
  imports: [
    BuildingRoutingModule
  ],
  declarations: [
    BuildingComponent,
    BuildingDetailComponent
  ]
})

export class BuildingModule {
}
