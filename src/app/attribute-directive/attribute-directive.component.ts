import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public message: any =
    ' attribute directive using custom directive';
  public color: any = 'blue';
}
