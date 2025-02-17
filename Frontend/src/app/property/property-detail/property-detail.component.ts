import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId:number
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // --we can use + or Number() to convert it number
    // this.propertyId=Number(this.route.snapshot.params['id'])
    this.propertyId=+this.route.snapshot.params['id']
    //this for updating property id to refelect on the commponent
    //after pagination buttons clicked
    this.route.params.subscribe(
      (params) =>{
        this.propertyId = + params['id']
      }
    )
  }
  onSelectNex(){
    this.propertyId+=1
    //absolite path -- no / is required
    this.router.navigate(['property-detail',this.propertyId])
    //in relative path -- / is required
    //this.router.navigate(['/property-detail',this.propertyId],{relativeTo:this.route})
  }
}
