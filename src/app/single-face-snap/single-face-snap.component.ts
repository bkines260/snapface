import { FaceSnapsService } from './../services/face-snaps.services';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {interval, Observable,of, Subject} from 'rxjs'
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  hasSnap!: boolean;
  buttonText!:string;
  constructor (private FaceSnapsService : FaceSnapsService, private route: ActivatedRoute){
  } ;
  ngOnInit(){
    this.hasSnap = false;
    this.buttonText='Oh Snap!'
    const FaceSnapId= +this.route.snapshot.params['id']
    this.faceSnap$ = this.FaceSnapsService.getFaceSnapById(FaceSnapId)
  }
  onSnap(faceSnapId : number){
    if(this.hasSnap){
      this.faceSnap$ = this.FaceSnapsService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
        tap(() => {
          this.buttonText='Oh Snap!'
          this.hasSnap = !this.hasSnap
        })
      )
    }
    else{
      this.faceSnap$ =  this.FaceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(()=>{
          this.buttonText='Oops unSnap'
          this.hasSnap = !this.hasSnap
        })
      )
    }
  }
}
