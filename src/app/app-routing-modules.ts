import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NewFaceSnappComponent} from './new-face-snapp/new-face-snapp.component'
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

const routes: Routes = [
    {path: 'facesnaps/:id', component:SingleFaceSnapComponent},
    {path: 'facesnaps', component:FaceSnapListComponent},
    {path: 'create', component:NewFaceSnappComponent},
    {path: '', component:LandingPageComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}
