import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExteneded: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Hartts',
          age: 34,
          address: {
            street: '20 Spool St',
            city: 'Lindmast',
            state: 'MA'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Millard St',
            city: 'Miami',
            state: 'FL'
          }
        }
      ]
      this.loaded = true;
    }, 2000);


    //   this.addUser({
    //     firstName: 'David',
    //     lastName: 'Jackson',
    //     age: 44,
    //     address: {
    //       street: '22 Dillard St',
    //       city: 'Orlando',
    //       state: 'FL'
    //     }
    //   })
  }





  addUser(user: User) {
    this.users.push(user);
  }

}
