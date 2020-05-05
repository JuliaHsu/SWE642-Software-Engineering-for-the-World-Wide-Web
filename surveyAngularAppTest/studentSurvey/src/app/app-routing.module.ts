import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSurveyListComponent } from './show-survey-list/show-survey-list.component'
import {SurveyDetailsComponent} from './survey-details/survey-details.component'
import {SurveyFormComponent} from './survey-form/survey-form.component'

const routes: Routes = [
  {
    path:'show-survey-list',
    component: ShowSurveyListComponent
  } ,
  {
    path:'survey-details/:stuId',
    component: SurveyDetailsComponent
  },
  {
    path:'survey-form',
    component: SurveyFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
