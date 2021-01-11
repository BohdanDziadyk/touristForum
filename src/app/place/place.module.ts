import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPlacesComponent } from './all-places/all-places.component';
import { PlaceComponent } from './place/place.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AllPlacesComponent, PlaceComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: AllPlacesComponent},
            {path: ':id', component: PlaceComponent}
        ]),
        ReactiveFormsModule
    ]
})
export class PlaceModule { }
