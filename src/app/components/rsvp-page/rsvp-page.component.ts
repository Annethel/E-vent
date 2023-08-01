import { Component } from '@angular/core';
import { faClock, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.css']
})
export class RsvpPageComponent {
  falocation=faLocation;
  faclock= faClock;

eventDetails:Array<eventDetails> =[
  {title:'Wedding Anniversary', location:'Hilton Hotel Bamenda',time:'10:00am June 10',organizer:"Lady Bird",detail:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}
]


}
interface eventDetails{
title:string
location:string
time:string
organizer:string
detail:string
}
