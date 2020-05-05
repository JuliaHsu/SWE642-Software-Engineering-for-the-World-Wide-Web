import { Component, OnInit } from '@angular/core';
import{SurveyService} from '../survey-service.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-show-survey-list',
  templateUrl: './show-survey-list.component.html',
  styleUrls: ['./show-survey-list.component.css']
})
export class ShowSurveyListComponent implements OnInit {
  restUrl:string = "http://localhost:8080/RestfulWS/rest/studentSurvey/"
  surveys: SurveyService[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getSurveyAll().subscribe(
      res=>{
        console.log(res);
        this.surveys = res["body"];
      },
      error=>alert("not able to request the content'")
      // error => console.error('There was an error!', error)
    )
  }

  getSurveyAll():Observable<any>{
    return this.http.get(this.restUrl, {observe:'response'});
  }

}
