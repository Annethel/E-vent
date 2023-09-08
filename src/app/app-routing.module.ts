import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { EventsComponent } from './components/events/events.component';
import { VenuesComponent } from './components/venues/venues.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisrationFormComponent } from './components/forms/regisration-form/regisration-form.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateVenuesComponent } from './components/create-venues/create-venues.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {
    path:'home',component:ComponentsComponent,
    children:[
      {path:'events', component: EventsComponent},
      {path:'event', component:RsvpPageComponent},
      { path: 'venue', component: VenuesComponent },
      {path:'create-event', component:CreateEventComponent},
      {path:'add-venue', component:CreateVenuesComponent},
     ],

  },
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisrationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
