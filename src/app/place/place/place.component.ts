import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../user/models/UserModel';
import {PlaceModel} from '../models/PlaceModel';
import {places} from '../../places'
import {ActivatedRoute} from '@angular/router';
import {users} from '../../users'
import {comments} from '../../comments'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommentModel} from '../models/CommentModel';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  place: PlaceModel;
  places: PlaceModel[] = places;
  filteredPlaces: PlaceModel[];
  user: UserModel;
  users: UserModel[] = users;
  filteredUsers: UserModel[];
  form: FormGroup;
  title: FormControl = new FormControl('')
  body: FormControl = new FormControl('', [Validators.required])
  comments: CommentModel[];
  newComment: CommentModel;
  constructor(private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      title: this.title,
      body: this.body
    })
  }
  getRandomInt(max) : string{
    return Math.floor(Math.random() * Math.floor(max)).toString();
  }
  addComment(form: FormGroup){
    this.newComment = {
      id: this.getRandomInt(100),
      user: this.user.username,
      title: form.controls.title.value,
      body: form.controls.body.value
    }
    console.log(this.comments);
    console.log(this.newComment);
    console.log(this.comments);
    this.comments.push(this.newComment);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.filteredPlaces = this.places.filter(value1 => value1.id == value.id));
    this.place = this.filteredPlaces[0]
    this.user = null;
    this.users = users;
    this.comments = comments;
    if(localStorage.getItem("id")){
        // @ts-ignore
        this.filteredUsers = this.users.filter(user => user.id == localStorage.getItem('id'));
        this.user = this.filteredUsers[0];
    }
  }

}
