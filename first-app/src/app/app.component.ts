import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';

  onChangeTitleClick(appTitle){
  	this.title = appTitle;
  	console.log('Change title action triggered by the user');

  }
}
