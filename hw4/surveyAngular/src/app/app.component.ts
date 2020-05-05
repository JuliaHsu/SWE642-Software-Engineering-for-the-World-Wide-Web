import { SharedService } from './shared.service';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private submitted: Boolean
  // constructor(sharedService: SharedService){
  //   sharedService.getSubmitted().subscribe((data) => {
  //     this.submitted = data
  //   });
  // }
}
