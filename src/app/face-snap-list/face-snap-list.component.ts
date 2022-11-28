import { FaceSnapsService } from './../services/face-snaps.services';
import { Component, OnInit , OnDestroy} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {interval, Observable,of, Subject} from 'rxjs'
import {filter, map, tap, mergeMap,take, delay,concatMap,exhaustMap,switchMap,takeUntil} from 'rxjs/operators'
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit,OnDestroy {
  faceSnaps!:FaceSnap[]
  faceSnaps$!: Observable<FaceSnap[]>
  // private destroy$!: Subject<boolean>
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps() ;
    // this.destroy$ = new Subject<boolean>;
    // this.faceSnaps = this.faceSnapsService.getAllFaceSnaps() ;
    // interval(1000).pipe(
    //   take(3),
    //   tap(value => console.log('value', value,new Date())),
    //   map(value => value==0 ? 'first' :(value==1 ? 'second' : 'third')),
    //   switchMap(message => this.processMessage$(message)),
    //   tap(value => console.log('value', value, new Date()))
    // ).subscribe()
  }
  // processMessage$(message : 'first' | 'second' | 'third') : any{
  //   const rest = message + 'processed';
  //   return of(rest).pipe(delay(3000))
  // }
  ngOnDestroy(){
    // this.destroy$.next(true)
  }
}
