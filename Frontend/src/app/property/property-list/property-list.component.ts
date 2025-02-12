import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any> = 
  [
      {
        Id:101,
        Name:"Omar House",
        Type:"House",
        Price:12000
      },
      {
        Id:102,
        Name:"Ali House",
        Type:"House",
        Price:13000
      },
      {
        Id:103,
        Name:"Ahmed House",
        Type:"House",
        Price:14000
      },
      {
        Id:104,
        Name:"Jama House",
        Type:"House",
        Price:15000
      },
      {
        Id:105,
        Name:"Hodan House",
        Type:"House",
        Price:16000
      },
      {
        Id:105,
        Name:"Hirsi House",
        Type:"House",
        Price:17000
      }     
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
