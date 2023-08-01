import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {

 data: FormGroup;

  ngOnInit(): void {
    this.data = new FormGroup({
      first_name : new FormControl(null, Validators.required),
      Last_name : new FormControl(null, Validators.required),
      tel : new FormControl(null, Validators.required),
      email : new FormControl(null,  [Validators.required, Validators.email]),
      detail: new FormControl(null)
    })
  }

  onSubmit(){

  }


}
