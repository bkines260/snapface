import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { interval, Observable, of } from 'rxjs'
import { FaceSnap } from '../../../core/models/face-snap.model';
import { filter, map, tap, mergeMap, take, delay, concatMap, exhaustMap, switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { FaceSnapsService } from '../../../core/services/face-snaps.services';
@Component({
  selector: 'app-new-face-snapp',
  templateUrl: './new-face-snapp.component.html',
  styleUrls: ['./new-face-snapp.component.scss']
})
export class NewFaceSnappComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;
  constructor(private formBuilder: FormBuilder, private router: Router, private faceSnapsService: FaceSnapsService) { }
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    },
      {
        updateOn: 'blur'
      })
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }
  onSubmitForm(): void {
    console.log('subbb')
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps')
      )
    ).subscribe();
  }

}
