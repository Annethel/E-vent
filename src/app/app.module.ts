import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ImgageComponent } from './components/imgage/imgage.component';
import { SearchComponent } from './components/search/search.component';
import { VenuecardComponent } from './components/venues/venuecard/venuecard.component';
import { EventsComponent } from './components/events/events.component';
import { VenuesComponent } from './components/venues/venues.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { RsvpFormComponent } from './components/rsvp-page/rsvp-form/rsvp-form.component';
import { RegisrationFormComponent } from './components/forms/regisration-form/regisration-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    TopbarComponent,
    ImgageComponent,
    SearchComponent,
    VenuecardComponent,
    EventsComponent,
    VenuesComponent,
    RsvpPageComponent,
    RsvpFormComponent,
    RegisrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
