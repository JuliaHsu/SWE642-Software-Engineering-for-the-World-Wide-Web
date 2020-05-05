import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import{SurveyService} from '../../survey-service.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';



@Component({
  selector: 'result-component',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  avg: number;
  avgSD: number;
  submitted: boolean;
  restUrl:string = "http://localhost:8080/RestfulWS/rest/studentSurvey/"
  
  showVar: boolean = true;

  constructor(sharedService: SharedService, private http:HttpClient){
    sharedService.getSubmitted().subscribe((data) => {
        this.submitted = data;
      });
    sharedService.getAvg().subscribe((data) => {
      this.avg = data
    });
    sharedService.getAvgSD().subscribe((data) => {
        this.avgSD = data
      });
  }

  ngOnInit(): void {
    // this.getSurveyAll().subscribe(
    //   res=>{
    //     console.log(res);
    //     this.surveys = res["body"];
    //   },
    //   error=>alert("not able to request the content'")
    //   // error => console.error('There was an error!', error)
    // )
  }
  // showList():void{
  //   this.getSurveyAll().subscribe(
  //     res=>{
  //       console.log(res);
  //       this.surveys = res["body"];
  //     },
  //     error=>alert("not able to request the content'")
  //     // error => console.error('There was an error!', error)
  //   )
  //   this.showVar = !this.showVar;
  // }
  // getSurveyAll():Observable<any>{
  //   return this.http.get(this.restUrl, {observe:'response'});
  // }
}


