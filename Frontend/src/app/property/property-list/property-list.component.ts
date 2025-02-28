import { Component, Input, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IPropertyBase[];
  date = new Date();
  City='';
  SearchCity='';
  SortbyPram='';
  SortDirection='asc';
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
  onCityFilter(){
  this.SearchCity=this.City;
  }
  onCityFilterClear(){
    this.SearchCity='';
    this.City='';
  }
  onSortDirection(){
    if(this.SortDirection==='asc')
      this.SortDirection='desc'
    else
    this.SortDirection='asc'
  }
}
