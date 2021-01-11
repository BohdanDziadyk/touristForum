import { Component, OnInit } from '@angular/core';
import {users} from '../../users'
import {UserModel} from '../models/UserModel';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: UserModel[] = users;
  user: UserModel;
  filteredUsers: UserModel[];
  constructor() { }

  ngOnInit(): void {
    this.user = null;
    this.users = users;
    if(localStorage.getItem("id")){
        // @ts-ignore
        this.filteredUsers = this.users.filter(user => user.id == localStorage.getItem('id'));
        this.user = this.filteredUsers[0];
    }
  }

}
