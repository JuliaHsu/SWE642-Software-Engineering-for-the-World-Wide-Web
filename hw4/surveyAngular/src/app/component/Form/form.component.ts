import { SharedService } from './../../shared.service';
import { element } from 'protractor';
import { FormGroup, FormControl,FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { fullNameValidator } from '../../shared/full-name.validator';
import { HearFromValidators } from '../../shared/hearFrom.validator';
import { DataRange } from '../../shared/dataRange.validator';
import { User } from '../../user';
import UserService from '../../app.service';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {SurveyService} from '../../survey-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user = new Array<User>();
  submitted = false;
  sharedServiceInit: SharedService
  restCreateUrl:string = 'http://localhost:8080/RestfulWS/rest/studentSurvey/create'
  surveyInfo:SurveyService = new SurveyService() 
  constructor(private fb: FormBuilder, userService: UserService, sharedService: SharedService, private http:HttpClient,  private router:Router){
    
    sharedService.setSubmmited(this.submitted);
    this.sharedServiceInit = sharedService;
    userService.getUser().subscribe(response => 
      {
        console.log(response);
      })

  }

  mostLikes: any[] = [
    {name: 'Students', value: "students"},
    {name: 'Location', value: "location"},
    {name: 'Campus', value: "campus"},
    {name: 'Atmosphere', value: "atmosphere"},
    {name: 'DormRooms', value: "dormRooms"},
    {name: 'Sports', value: "sports"}
  ];
  surveyForm : FormGroup;
  gradMonths=['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  likely=['Very Likely','Likely','Unlikely'];
  
  // mapping check box to string
  likeMostVal:string[] = ['students','location','campus','dorm rooms','atmosphere','sports']
  
  //  getter methods to get FormControl elements in the FormGroup and communicate with .html
  get fullName(){
    return this.surveyForm.get('fullName');
  }

  get studentId(){
    return this.surveyForm.get('studentId');
  }
  get streetAdd(){
    return this.surveyForm.get('streetAdd');
  }
  get city(){
    return this.surveyForm.get('city');
  }

  get state(){
    return this.surveyForm.get('state');
  }

  get zip(){
    return this.surveyForm.get('zip');
  }

  get phone(){
    return this.surveyForm.get('phone');
  }

  get email(){
    return this.surveyForm.get('email');
  }

  get url(){
    return this.surveyForm.get('url');
  }

  get howBecomeInterested(){
    return this.surveyForm.get('howBecomeInterested');
  }

  get gradMonth(){
    return this.surveyForm.get('gradMonth');
  }

  get gradYear(){
    return this.surveyForm.get('gradYear');
  }

  get howLikely(){
    return this.surveyForm.get('howLikely');
  }

  get data(){
    return this.surveyForm.get('data');
  }
  
  ngOnInit() {
   // sharedService.setSubmmited(this.submitted);

  // const currentDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"}); //.toISOString().substring(0, 10);
  const currentDate = new Date().toISOString().substring(0, 10);
    //using the .group() method in FormBuilder to create a FormGroup with a group of FormControl elements
  // in each element the first is default value, second is the validation array to test if error message should show
  // using Validators.method() to validate form fields
  this.surveyForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
    studentId: ['',[Validators.required]],
    streetAdd: ['',[Validators.required]],
    city: ['',[Validators.required]],
    state: ['',[Validators.required]],
    zip: ['',[Validators.required]],
    phone: ['',[Validators.required, Validators.pattern]],
    email: ['',[Validators.required]],
    url: ['',[Validators.required]],
    todayDate: [''],
    
    // multipleCheckboxRequireTwo
    likeMostsArray: this.fb.array(
      this.mostLikes.map(() => this.fb.control('')),
      HearFromValidators.multipleCheckboxRequireTwo
    ),

    howBecomeInterested: ['',[Validators.required],],
    gradMonth: ['',[Validators.required]],
    gradYear: ['',[Validators.required]],
    howLikely: ['',[Validators.required]],
    feedBack: ['',[Validators.required]],
    data: ['',[Validators.required, DataRange.dataRangeCheckFailed]]
  })
  this.surveyForm.controls['todayDate'].setValue(currentDate);
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.surveyForm.controls; }

  getValidity() {
    return (<FormArray>this.surveyForm.get('likeMostsArray')).controls.values;
  }

standardDeviation(values: string){
    const valueAarry = values.split(',');
    const avg = this.average(values);
    
    const squareDiffs = valueAarry.map(function(value){
      const diff = parseInt(value) - avg;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });
    const avgSquareDiff = this.sdaverage(squareDiffs);
  
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  sdaverage(data){
    var sum = data.reduce(function(sum: number, value:number){
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }
  average(values: string): number {
    return values.split(',').reduce(function(a: number, b: string){
        return a + parseInt(b);
    }, 0)/ 10;
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.surveyForm.invalid) {
        alert("Please check your form!")
        return;
    }
    this.submitted = true;
    console.log(this.surveyForm);
    const dataAvg = this.average(this.surveyForm.value.data);
    const dataSD = this.standardDeviation(this.surveyForm.value.data);
    console.log(dataAvg);
    console.log(dataSD);
    this.sharedServiceInit.setSubmmited(this.submitted);
    this.sharedServiceInit.setAvg(dataAvg);
    this.sharedServiceInit.setAvgSD(dataSD);


  // post
    let jsonBody= { 
      fullName:this.surveyInfo.fullName,
      studentId:this.surveyInfo.studentId,
      address:this.surveyInfo.address,
      city:this.surveyInfo.city,
      state:this.surveyInfo.state,
      zip:this.surveyInfo.zip,
      phone:this.surveyInfo.phone,
      email:this.surveyInfo.email,
      url:this.surveyInfo.url,
      todayDate:this.surveyInfo.todayDate,
      likeMost:this.likeMostParse(this.surveyInfo.likeMostArr),
      gradMonth:this.surveyInfo.gradMonth,
      gradYear:this.surveyInfo.gradYear,
      feedback:this.surveyInfo.feedback,
      hearFrom:(this.surveyInfo.hearFrom)?this.surveyInfo.hearFrom:' ',
      recommend:(this.surveyInfo.recommend)?this.surveyInfo.recommend:' '
    };
    // alert(this.surveyInfo.studentId)
    alert('submitting your form...\n'); 
    this.http.post(this.restCreateUrl,jsonBody,
      {headers: this.getHeaders()}).subscribe(
        res=>{
          alert('form submitted...\n'); 
          // this.router.navigate(['/home']);
        },
        error=>{
          error => console.error(jsonBody+'There was an error!', error)
        }
      );
    return;

    // this.surveyForm.value.data.split(',').reduce(function(a: number, b: string){
    //     return a + parseInt(b);
    // }, 0)/ 10;
 
    // display form values on success
    //alert('Your form has been submitted\n\n' );
}



  onReset() {
    this.submitted = false;
    this.surveyForm.reset();
}

likeMostParse (b:boolean[]):string{
  let temp='';
  b.forEach((value, index) => {
    value?(temp=temp+'  '+this.likeMostVal[index]):temp=temp;
  });
  return temp;
}

private getHeaders() {
  let headers = new HttpHeaders();
  
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/x-www-form-urlencoded');
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append("Access-Control-Expose-Headers", "Content-Length");
  headers.append("Access-Control-Expose-Headers", "X-JSON");
  headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Methods','*');
  headers.append('ccess-Control-Allow-Headers','*');

  return headers;
}

}
