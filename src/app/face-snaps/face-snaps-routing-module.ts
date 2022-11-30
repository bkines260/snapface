import { AuthGuard } from '../core/guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {NewFaceSnappComponent} from './../face-snaps/components/new-face-snapp/new-face-snapp.component'
import { FaceSnapListComponent } from './../face-snaps/components/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './../face-snaps/components/single-face-snap/single-face-snap.component';
const routes: Routes = [
  {path: 'create', component:NewFaceSnappComponent, canActivate: [AuthGuard]},
  {path: ':id', component:SingleFaceSnapComponent, canActivate: [AuthGuard]},
  {path: '', component:FaceSnapListComponent, canActivate: [AuthGuard]},

];
@NgModule({
  imports:[
      RouterModule.forChild(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class FaceSnapRoutingModule{

}
