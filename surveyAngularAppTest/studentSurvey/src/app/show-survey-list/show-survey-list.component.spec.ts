import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSurveyListComponent } from './show-survey-list.component';

describe('ShowSurveyListComponent', () => {
  let component: ShowSurveyListComponent;
  let fixture: ComponentFixture<ShowSurveyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSurveyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
