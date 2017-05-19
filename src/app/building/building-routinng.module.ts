import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
// import {} from '';
// import {} from '';

const buildingRoutes: Routes = [
  {
    path: '',
    component: BuildingComponent,
    children:[
      {
        path: ':id',
        component: BuildingDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(buildingRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BuildingRoutingModule{}
