import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse } from '../models/data/login.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiUrl +"/user"

  constructor(private http:HttpClient, private _localstorage: LocalStorageService) { }

  login(request:LoginRequest):Observable<LoginResponse>{
    this._localstorage.clear()
    const loginResponseSubject: Subject<LoginResponse> = new Subject();
    
    this.http.post<LoginResponse>(this.url +'/token', request).subscribe(res => {
      loginResponseSubject.next(res);
      this._localstorage.set('access_token', res.access_token);
      console.log(res.access_token)
    });

   return loginResponseSubject.asObservable();
  }
  // login(request:any):Observable<any>{
  //   this._localstorage.clear()
  //   const loginResponseSubject: Subject<any> = new Subject();
    
  //   this.http.post<any>(this.url +'/token', request).subscribe(res => {
  //     loginResponseSubject.next(res);
  //     this._localstorage.set('access_token', res.access_token);
  //     console.log(res.access_token)
  //   });

  //  return loginResponseSubject.asObservable();
  // }
}
