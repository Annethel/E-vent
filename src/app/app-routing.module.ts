import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { EventsComponent } from './components/events/events.component';
import { VenuesComponent } from './components/venues/venues.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisrationFormComponent } from './components/forms/regisration-form/regisration-form.component';

const routes: Routes = [
  {
    path:'',component:ComponentsComponent,
    children:[
      {path:'event', component: EventsComponent},
      { path: 'venue', component: VenuesComponent },
      {path:'create_event', component:RsvpPageComponent},
      {path:'login', component:LoginFormComponent},
      {path:'register', component:RegisrationFormComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
