import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { BookingComponent } from './booking/booking.component';
import { TriphistoryComponent } from './triphistory/triphistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'search', component:SearchComponent},
  {path: 'booking', component: BookingComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'addflight', component:AddFlightComponent},
  {path:'deleteflight', component:DeleteFlightComponent},
  {path:'payment', component:PaymentComponent},
  {path:'selectflight/:fNumber', component:SelectFlightComponent},
  {path:'updateflight', component:UpdateFlightComponent},
  {path:'bookflight', component:BookingListComponent},
  {path:'bookingdetails', component:BookingDetailsComponent},
  {path:'thankyou', component:ThankyouComponent},
  {path:'triphistory', component: TriphistoryComponent },
  {path: 'profile', component: MyprofileComponent},
  {path: 'showusers', component: ShowusersComponent},
  {path: 'showbuses', component: ShowbusesComponent},
  {path: 'addbus', component: AddbusComponent},
  {path: 'showbookings', component: ShowbookingsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
