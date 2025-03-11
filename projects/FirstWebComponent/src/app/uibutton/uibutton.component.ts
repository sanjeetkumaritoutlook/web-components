import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-uibutton',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.css']
})
export class UIButtonComponent implements OnInit {
  @Input() shouldCountClicks = false;
  constructor() { }

  ngOnInit(): void {
  }

}
