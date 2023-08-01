import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regisration-form',
  templateUrl: './regisration-form.component.html',
  styleUrls: ['./regisration-form.component.css']
})
export class RegisrationFormComponent implements OnInit {

  formgroup: FormGroup;

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      fullname : new FormControl(null, Validators.required),
      username : new FormControl(null, Validators.required),
      tel : new FormControl(null, Validators.required),
      occupation : new FormControl(null, Validators.required),
      email : new FormControl(null,  [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){

  }

}
