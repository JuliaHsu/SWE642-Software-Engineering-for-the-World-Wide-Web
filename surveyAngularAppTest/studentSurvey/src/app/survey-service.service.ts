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
  url: String = 'aaa';
  date : string = '2020/05/02';

  likeMostArr : boolean[] = [false,false,false,false,false,false];
  likeMost:string='';
  hearFrom : string = '';
  gradMonth : string = '05'; 
  gradYear : string = '2017';
  recommend: string = '';
  feedback: string = '';
}
