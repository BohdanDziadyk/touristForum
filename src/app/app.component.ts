import { Component, OnInit } from '@angular/core';
import {UserModel} from './user/models/UserModel';
import {users} from './users'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'touristForum';
  user: UserModel;
  users: UserModel[];
  filteredUsers: UserModel[];
  ngOnInit(): void {
    this.user = null;
    this.users = users;
    if(localStorage.getItem("id")){
        // @ts-ignore
        this.filteredUsers = this.users.filter(user => user.id == localStorage.getItem('id'));
        this.user = this.filteredUsers[0];
    }
  }
  isAuthenticated(): boolean{
    return !!localStorage.getItem('id');
  }
  LogOut() {
    localStorage.removeItem('id')
    this.ngOnInit()
  }
}
