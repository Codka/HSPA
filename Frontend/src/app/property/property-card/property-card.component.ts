import { Component } from "@angular/core";

@Component(
{
    selector:'app-property-card',
    //template:`<h1> I am card Component</h1>`,
    templateUrl:'property-card.Component.html',
    //styles:['h1 {background-color:green;color:white;}']
    styleUrls:['property-card.Component.css']
}

)
export class PropertCardComponent{
Property:any =
{
Id:101,
Name:"Omar House",
Type:"House",
Price:12000
}
}