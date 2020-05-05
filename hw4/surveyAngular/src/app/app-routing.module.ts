import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyDetailsComponent} from './survey-details/survey-details.component'

const routes: Routes = [
  {
    path:'survey-details/:studentId',
    component: SurveyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
