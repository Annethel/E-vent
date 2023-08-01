import { Component } from '@angular/core';
import { faClock, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  falocation=faLocation;
  faclock= faClock;

  eventDeatils:Array<eventDetails>=[
    {id:1, title:'Wedding Anniversary', planner:'Lady Bird', location:'Hilton Hotel Bamenda', time:'10:00 am June 30'},
    {id:2, title:'Wedding Dinner', planner:'Mr Juvance', location:'Las Vegas Bamenda', time:'18:00 am April'},
    {id:3, title:'Birthday Party', planner:'April Bird', location:'Black Rose Bambili', time:'15:00 am March 4'},
    {id:4, title:'Concert Night', planner:'The Legacy', location:'Hilltop Hotel Yaounde', time:'19:00 am June 30'},
    {id:1, title:'Wedding Anniversary', planner:'Lady Bird', location:'Hilton Hotel Bamenda', time:'10:00 am June 30'},
    {id:2, title:'Wedding Dinner', planner:'Mr Juvance', location:'Las Vegas Bamenda', time:'18:00 am April'},
    {id:3, title:'Birthday Party', planner:'April Bird', location:'Black Rose Bambili', time:'15:00 am March 4'},
    {id:4, title:'Concert Night', planner:'The Legacy', location:'Hilltop Hotel Yaounde', time:'19:00 am June 30'},
  ]

}

interface eventDetails{
  id:number
  title:string
  planner:string
  location:string
  time:string
}