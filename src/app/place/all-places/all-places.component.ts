import { Component, OnInit } from '@angular/core';
import {places} from '../../places'
import {PlaceModel} from '../models/PlaceModel';
import {users} from '../../users'
import {UserModel} from '../../user/models/UserModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.css']
})
export class AllPlacesComponent implements OnInit {
  newPlace: PlaceModel;
  places: PlaceModel[] = places;
  user: UserModel;
  users: UserModel[] = users;
  filteredUsers: UserModel[];
  formFlag = false;
  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required])
  image: FormControl = new FormControl('', [Validators.required])
  description: FormControl = new FormControl('', [Validators.required])
  country: FormControl = new FormControl('', [Validators.required])
  city: FormControl = new FormControl('')
  address: FormControl = new FormControl('')
  phone: FormControl = new FormControl('')
  website: FormControl = new FormControl('')
  constructor() {
    this.form = new FormGroup({
      name: this.name,
      image: this.image,
      description: this.description,
      country: this.country,
      city: this.city,
      address: this.address,
      phone: this.phone,
      website: this.website
    })
  }

  ngOnInit(): void {
    this.user = null;
    this.users = users;
    if(localStorage.getItem("id")){
        // @ts-ignore
        this.filteredUsers = this.users.filter(user => user.id == localStorage.getItem('id'));
        this.user = this.filteredUsers[0];
    }
  }
  changeFormFlag():void{
    this.formFlag = !this.formFlag;
  }
  getFormFlag(): boolean{
    return this.formFlag;
  }
  getRandomInt(max) : string{
    return Math.floor(Math.random() * Math.floor(max)).toString();
  }
  addPlace(form: FormGroup) {
    this.newPlace = {
      id: this.getRandomInt(100),
      name: form.controls.name.value,
      image: form.controls.image.value,
      description: form.controls.description.value,
      country: form.controls.country.value,
      city: form.controls.city.value,
      address: form.controls.address.value,
      phone: form.controls.phone.value,
      website: form.controls.website.value
    }
    places.push(this.newPlace)
    this.changeFormFlag();
  }
}
