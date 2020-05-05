import { FormComponent } from './component/Form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './component/result/result.component';
import { ShowSurveyListComponent } from './show-survey-list/show-survey-list.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    ShowSurveyListComponent,
    SurveyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormComponent, ResultComponent]
})
export class AppModule { }
