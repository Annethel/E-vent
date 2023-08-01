import { Component } from '@angular/core';
import { faClock, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-venuecard',
  templateUrl: './venuecard.component.html',
  styleUrls: ['./venuecard.component.css']
})
export class VenuecardComponent {
  falocation=faLocation;
  faclock= faClock;

  venueDetails:Array<venuesDatails>=[
    {venuename:'Hotel de Vine', price:500000,location:'Carrefour Damas, Yde', duration:'June 18 - June 20'},
    {venuename:'Hotel de Vine', price:500000,location:'Carrefour Damas, Yde', duration:'June 18 - June 20'},
    {venuename:'Hotel de Vine', price:500000,location:'Carrefour Damas, Yde', duration:'June 18 - June 20'},
    {venuename:'Hotel de Vine', price:500000,location:'Carrefour Damas, Yde', duration:'June 18 - June 20'},
  ]

}
interface venuesDatails {
 
  venuename:string
  price:number
  location:string
  duration:string
  

}
