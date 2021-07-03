import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  txt_personName: string = '';
  @Output() personCreateName = new EventEmitter<string>();

  onCreatePerson() {
    console.log("Event handling!, Person name is " + this.txt_personName);
    this.personCreateName.emit(this.txt_personName);
    this.txt_personName = '';
  }
}
