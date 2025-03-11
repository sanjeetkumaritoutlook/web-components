import { Component } from '@angular/core';
//import our Web Component
import './web-component/search-result.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstWebComponent';
  name;
}
