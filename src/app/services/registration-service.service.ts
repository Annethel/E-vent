import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistreationRequest } from '../models/data/registration.data';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  apiUrl = environment.apiUrl + "/user"

  constructor(private http:HttpClient) { }
  saveData=(data: RegistreationRequest) =>{
    //console.log(data)
    return this.http.post(this.apiUrl +"/register", data)
  }
}
