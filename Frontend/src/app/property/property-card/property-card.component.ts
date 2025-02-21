import { Component, Input } from "@angular/core";
import { IProperty } from "src/app/model/iproperty";

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
    @Input() property: IProperty;
    @Input() hideIcons:boolean = false;
}