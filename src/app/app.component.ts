import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'data-binding-demo';
  firstName: string = 'Rushabh';
  lastName: string = 'Makwana';
  link: string = 'https://picsum.photos/200/300';
  showMe: boolean = false;
  myNumber: number = 1;
  students = ['Jainik', 'Divya', 'Rathi'];
  studentList = [
    {
      first_name: 'Rushabh',
      last_name: 'Makwana',
    },
    {
      first_name: 'Parth',
      last_name: 'Sardhara',
    },
    {
      first_name: 'Rushabh',
      last_name: 'Makwana',
    },
    {
      first_name: 'Parth',
      last_name: 'Sardhara',
    },
    {
      first_name: 'Rushabh',
      last_name: 'Makwana',
    },
    {
      first_name: 'Parth',
      last_name: 'Sardhara',
    },
  ];

  style = {
    color: 'blue',
    background: 'yellow',
  };

  getFirstName() {
    return [{ first_name: 'Rushabh' }, { first_name: 'Parth' }];
  }

  clickMe(firstName = 'Parth') {}

  setFirstName() {
    this.firstName = 'Rushabh';
  }

  showButton() {
    this.showMe = !this.showMe;
  }
}
