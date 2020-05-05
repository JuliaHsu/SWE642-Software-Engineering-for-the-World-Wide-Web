import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }
  fullName : string = '';
  studentId : string = '';
  address : string = '';
  city : string = '';
  state : string = '';
  zip : string = '';
  phone : string = '';
  email : string = '';
  url: String = '';
  todayDate : string = '';

  likeMostArr : boolean[] = [false,false,false,false,false,false];
  likeMost:string='';
  hearFrom : string = '';
  gradMonth : string = ''; 
  gradYear : string = '';
  recommend: string = '';
  feedback: string = '';
}
