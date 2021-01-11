import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/UserModel';
import {ActivatedRoute} from '@angular/router';
import {users} from '../../users'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserModel;
  users: UserModel[] = users;
  filteredUsers: UserModel[];
  loggedUser: UserModel;
  loggedFilteredUsers: UserModel[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.filteredUsers = this.users.filter(value1 => value1.id == value.id));
    this.user = this.filteredUsers[0]
    this.loggedUser = null;
    this.users = users;
    if(localStorage.getItem("id")){
        // @ts-ignore
        this.loggedFilteredUsers = this.users.filter(user => user.id == localStorage.getItem('id'));
        this.loggedUser = this.loggedFilteredUsers[0];
    }
  }

}
