import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs?: TabsetComponent;
//wil come from msters
propertyTypes : Array<String> = ['House','Apartment','Duplex']
furnishTypes : Array<String> = ['Fully','Semi','Unfurnished']
propertyMoveDirections : Array<String> = ['East','West','South','North']

propertyView : IPropertyBase = {
  Id: null,
  SellRent: null,
  Name: '',
  PType: '',
  FType: '',
  Price: null,
  BHK: null,
  BuiltArea: null,
  City: '',
  RTM: null
};
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log('Contracts, form submited');
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }  
}
