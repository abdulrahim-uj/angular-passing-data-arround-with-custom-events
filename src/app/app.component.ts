import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-refresher';

  persons: string[] = ['Ubaidulla K', 'Jubairiya K', 'AbdulRahim K', 'AbdulVahid K', 'Suhaila K']

  script: string = "<li *ngFor = " + "let pData of personList" + ">{{ pData }}</li>";

  onPersonCreated(personNameData: string) {
    this.persons.push(personNameData);
  }
}
