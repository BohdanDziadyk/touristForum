import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../user/models/UserModel';
import {Router} from '@angular/router';
import {users} from '../../users'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  email: FormControl = new FormControl('', [Validators.email, Validators.required])
  password: FormControl = new FormControl('', [Validators.required])
  confirmPassword: FormControl = new FormControl('', [Validators.required])
  username: FormControl = new FormControl('', [Validators.required])
  name: FormControl = new FormControl('')
  phone: FormControl = new FormControl('')
  website: FormControl = new FormControl('')
  newUser: UserModel = null;
  users: UserModel[];
  constructor(private router: Router) {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      username: this.username,
      name: this.username,
      phone: this.phone,
      website: this.website
    }, this.passwordValidator.bind(this));
  }
  passwordValidator(form: FormGroup): null | object {
    const {value : password} = form.controls.password;
    const {value: confirmPassword} = form.controls.confirmPassword;
    return password === confirmPassword ? null : {passwordError: true};
  }
  ngOnInit(): void {
    this.users = users;
  }
  getRandomInt(max) : string{
    return Math.floor(Math.random() * Math.floor(max)).toString();
  }
  createUser(form: FormGroup) {
    this.newUser = {
      id: this.getRandomInt(100),
      email: form.controls.email.value,
      password: form.controls.password.value,
      username: form.controls.username.value,
      name: form.controls.username.value,
      phone: form.controls.phone.value,
      website: form.controls.website.value,
      account_type: 'user'
    }
    users.push(this.newUser);
    this.router.navigate(['login'])
  }
}
