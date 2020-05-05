import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import {SurveyService} from '../survey-service.service';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  restCreateUrl:string = 'http://localhost:8080/RestfulWS/rest/studentSurvey/create'
  surveyInfo:SurveyService = new SurveyService() 
  likeMostVal:string[] = ['students','location','campus','dorm rooms','atmosphere','sports']
  constructor(private http:HttpClient,  private router:Router ) { }

  ngOnInit(): void {

  }

  campusParse (b:boolean[]):string{
    let temp='';
    b.forEach((value, index) => {
      value?(temp=temp+'  '+this.likeMostVal[index]):temp=temp;
    });
    return temp;
  }
  onClickSubmit():void{
    // console.log('Saving survey ' + JSON.stringify(this.surveyInfo));
    // this.http.post(this.restCreateUrl,JSON.stringify(this.surveyInfo),{headers:this.getHeaders()}).subscribe(
    //   succeed=>{
    //     alert('form submitted\n'  + JSON.stringify(this.surveyInfo));      
    //     // this.router.navigate(['/home']);
    //   },
    //   error=>{
    //     // alert('failed to submit the form\n' + JSON.stringify(this.surveyInfo));
    //     error => console.error('There was an error!', error);
    //   }
    // );

    let jsonBody= { 
      fullName:this.surveyInfo.fullName,
      stuId:this.surveyInfo.studentId,
      address:this.surveyInfo.address,
      city:this.surveyInfo.city,
      state:this.surveyInfo.state,
      zip:this.surveyInfo.zip,
      phone:this.surveyInfo.phone,
      email:this.surveyInfo.email,
      url:this.surveyInfo.url,
      date:this.surveyInfo.date,
      likeMost:this.campusParse(this.surveyInfo.likeMostArr),
      gradMonth:this.surveyInfo.gradMonth,
      gradYear:this.surveyInfo.gradYear,
      feedback:this.surveyInfo.feedback,
      hearFrom:(this.surveyInfo.hearFrom)?this.surveyInfo.hearFrom:' ',
      recommend:(this.surveyInfo.recommend)?this.surveyInfo.recommend:' '
    };
    alert(this.surveyInfo.studentId)
    this.http.post(this.restCreateUrl,jsonBody,
      {headers: this.getHeaders()}).subscribe(
        res=>{
          alert('form submitted\n'  + jsonBody);      
          this.router.navigate(['/home']);
        },
        error=>{
          error => console.error(jsonBody+'There was an error!', error)
        }
      );
      return;
      
  }
    // let body ="fullName="+this.surveyInfo.fullName+"&"
    //         +"studentId="+this.surveyInfo.studentId+"&"
    //         +"address="+this.surveyInfo.address +"&"
    //         +"city="+this.surveyInfo.city+"&"
    //         +"state="+this.surveyInfo.state+"&"
    //         +"zip="+this.surveyInfo.zip+"&"
    //         +"phone="+this.surveyInfo.phone+"&"
    //         +"email="+this.surveyInfo.email+"&"
    //         +"date="+this.surveyInfo.date+"&"
    //         +"likeMost="+this.surveyInfo.likeMost+"&"
    //         +"gradMonth"+this.surveyInfo.gradMonth+"&"
    //         +"gradYear"+this.surveyInfo.gradYear+"&"
    //         +"hearFrom="+this.surveyInfo.hearFrom+"&"
    //         +"recommend="+this.surveyInfo.recommend;
    //         this.http.post(this.restCreateUrl,body).subscribe(
    //           succeed=>{
    //             alert('form submitted\n'  + body);      
    //             // this.router.navigate(['/home']);
    //           },
    //           error=>{
    //             error => console.error('There was an error!', error)
    //           }
    //         );

  

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


