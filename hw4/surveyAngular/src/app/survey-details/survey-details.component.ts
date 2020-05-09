import { Component, OnInit } from '@angular/core';
import{SurveyService} from '../survey-service.service'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  restUrl:string = "http://localhost:8080/RestfulWS/rest/studentSurvey/"
  surveys: SurveyService[]
  constructor(private http:HttpClient,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let studentId = params['studentId'];
      this.getSurveyDetails(studentId).subscribe(
        res=>{
          console.log(res);
          this.surveys = res["body"];
        },
        error=>{
          this.surveys = [{
            fullName: 'sss',
            studentId: '111',
            address: 'test',
            city: 'test',
            state: 'test',
            zip: 'test',
            phone: 'test',
            email: 'test',
            url: 'test',
            todayDate: 'test',
            likeMostArr: [false,false,false,false,false,false],
            likeMost: 'test',
            hearFrom: 'test',
            gradMonth: 'test',
            gradYear: 'test',
            recommend: 'test',
            feedback: 'test',
          }]
        }
      )
    }
    );
    
  }
  getSurveyDetails(studentId: string):Observable<any>{
    let detailUrl = this.restUrl+studentId
    return this.http.get(detailUrl, {observe:"response"});
  }

}
