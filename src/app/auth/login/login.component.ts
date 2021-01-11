import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {users} from '../../users'
import {UserModel} from '../../user/models/UserModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: UserModel[];
  form: FormGroup;
  email: FormControl = new FormControl('', [Validators.email,Validators.required]);
  password: FormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router) {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
    this.users = users
  }

  logIn(form: FormGroup) {
    for (let user of this.users){
      if (user.email === form.controls.email.value && user.password === form.controls.password.value){
        localStorage.setItem("id", `${user.id}`);
        this.router.navigate([""]).then(this.ngOnInit)
      }
    }
  }
}
