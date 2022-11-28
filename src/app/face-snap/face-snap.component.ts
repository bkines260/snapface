import { FaceSnapsService } from './../services/face-snaps.services';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
// décorateur

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent  implements OnInit{
  @Input() FaceSnap!: FaceSnap ;
  hasSnap!: boolean;
  buttonText!:string;
  constructor (private FaceSnapsService : FaceSnapsService,private router: Router){

  } ;

  ngOnInit(){
    this.hasSnap = false;
    this.buttonText='Oh Snap!'
  }
  onSnap(){
    if(this.hasSnap){
      this.FaceSnapsService.snapFaceSnapById(this.FaceSnap.id,'unsnap')      
      this.buttonText='Oh Snap!'
    }
    else{
      this.FaceSnapsService.snapFaceSnapById(this.FaceSnap.id, 'snap')
      this.buttonText='Oops unSnap'
    }
    this.hasSnap = !this.hasSnap
  }
  onViewFaceSnap(){
    this.router.navigateByUrl('facesnaps/'+this.FaceSnap.id)
  }
}
