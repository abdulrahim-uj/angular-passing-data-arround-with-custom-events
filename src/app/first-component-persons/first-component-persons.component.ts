import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component-persons',
  templateUrl: './first-component-persons.component.html',
  styleUrls: ['./first-component-persons.component.css']
})
export class FirstComponentPersonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personList: string[] | undefined;


}
