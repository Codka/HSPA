
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { fromEventPattern } from 'rxjs';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user.service';

const appRoutes:Routes = [
  {path:"", component:PropertyListComponent},
  {path:"property-list", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent},
  {path:"user/login", component:UserLoginComponent},
  {path:"user/register", component:UserRegisterComponent},
  //if the url is not found
  {path:"**", component:PropertyListComponent}//change PageNotFoundComponent if it required
]
@NgModule({
  declarations: [	
    AppComponent,
    PropertCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
