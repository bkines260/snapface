import { FaceSnapRoutingModule } from './face-snaps-routing-module';
import { RouterModule } from '@angular/router';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { NewFaceSnappComponent } from './components/new-face-snapp/new-face-snapp.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnappComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FaceSnapRoutingModule
  ],
  exports:[
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnappComponent,
    SingleFaceSnapComponent,
    FaceSnapRoutingModule
  ]
})
export class FaceSnapsModule { }
