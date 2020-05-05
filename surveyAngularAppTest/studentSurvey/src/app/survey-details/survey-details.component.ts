import { Component, OnInit } from '@angular/core';
import{SurveyService} from '../survey-service.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  restUrl:string = "http://localhost:8080/RestfulWS/rest/studentSurvey/"
  surveys: SurveyService[]
  constructor(private http:HttpClient,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let stuId = params['stuId'];
      this.getSurveyDetails(stuId).subscribe(
        res=>{
          console.log(res);
          this.surveys = res["body"];
        },
        error=>alert("not able to request the content'")
      )
    }
    );
    
  }
  getSurveyDetails(stuId: string):Observable<any>{
    let detailUrl = this.restUrl+stuId
    return this.http.get(detailUrl, {observe:"response"});
  }

}
