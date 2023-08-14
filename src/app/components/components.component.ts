import { Component } from '@angular/core';
import { faCalendar, faCalendarPlus, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { sidebarItems } from '../models/data/sideItems.data';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {

  sidebarItems = sidebarItems
}
