import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { fromEventPattern } from 'rxjs';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';


const appRoutes:Routes = [
  {path:"", component:PropertyListComponent},
  {path:"property-list", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"property-detail/:id", 
                              component:PropertyDetailComponent, 
                              resolve:{prp:PropertyDetailResolverService}},
  {path:"user/login", component:UserLoginComponent},
  {path:"user/register", component:UserRegisterComponent},
  //if the url is not found
  {path:"**", component:PropertyListComponent}//change PageNotFoundComponent if it required
]
@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent,
    FilterPipe,
    SortPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
