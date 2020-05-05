import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private submitted: Subject<boolean> = new Subject<boolean>();
  private avg: Subject<number> = new Subject<number>();
  private avgSD: Subject<number> = new Subject<number>();

  setSubmmited(curSubmitted) {
    this.submitted.next(curSubmitted);
  }
  public getSubmitted() {
    return this.submitted.asObservable();
  }
  setAvg(avgInput) {
      this.avg.next(avgInput);
  }
  public getAvg(){
      return this.avg.asObservable();
  }
  setAvgSD(avgSDInput) {
    this.avgSD.next(avgSDInput);
  }
    public getAvgSD(){
        return this.avgSD.asObservable();
    }
}