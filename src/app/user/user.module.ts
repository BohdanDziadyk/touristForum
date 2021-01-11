import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component:AllUsersComponent},
      {path: ':id', component:UserComponent}
    ])
  ]
})
export class UserModule { }
