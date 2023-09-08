import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';

@Component({
  selector: 'app-regisration-form',
  templateUrl: './regisration-form.component.html',
  styleUrls: ['./regisration-form.component.css']
})
export class RegisrationFormComponent implements OnInit {

  formgroup: FormGroup;

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      first_name : new FormControl(null, Validators.required),
      last_name : new FormControl(null, Validators.required),
      tel : new FormControl(null, Validators.required),
      occupation : new FormControl(null),
      email : new FormControl(null,  [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
    console.log(this.formgroup.value)
  }
  constructor(private registration:RegistrationServiceService){}

  onSubmit(){
    // console.log(this.formgroup.value)
    this.registration.saveData(this.formgroup.value).subscribe((res=>{
      console.log(res)
    }))

  }

}
