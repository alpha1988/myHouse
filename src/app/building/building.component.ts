import { Component, OnInit } from '@angular/core';
// import { buildingsList } from './components/buildings-list'

@Component({
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  // public list = buildingsList;

  title = 'building works!';
  buildingsList = [1,2,3];
  //   {
    //     id: 1,
    //     name: 'House'
    //   },
    //   {
    //     id: 2,
    //     name: 'Garage'
    //   },
    //   {
    //     id: 3,
    //     name: 'Depot'
    //   }
    // ];

  constructor() {
  }

  ngOnInit() {
  }

}
