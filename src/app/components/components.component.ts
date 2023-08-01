import { Component } from '@angular/core';
import { faCalendar, faCalendarPlus, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  eventicon = faCalendar;
  addeventicon = faCalendarPlus;
  venuesicon = faLocationDot;
  addvenueicon = faLocationPin;

}
