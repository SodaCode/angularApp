import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../../services/users.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', { static: false }) form: any;
  data: any;

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getData().subscribe(data => {
      console.log(data);
    });

    this._userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });


  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this._userService.addUser(value);

      this.form.reset();
    }
  }




}
