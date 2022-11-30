import { switchMap } from 'rxjs/operators';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn : 'root'
})
export class FaceSnapsService {
  constructor(private http:HttpClient){

   }
    faceSnaps: FaceSnap[]  = [
        new FaceSnap(1,'welcome to the jungle','Mon meilleur amis depuis tout petit !',"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",new Date(),350),
        new FaceSnap(2,'Archimed2','Mon meilleur amis depuis tout petit !2',"https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",new Date(),100,'Tunisie'),
        new FaceSnap(3,'Archimed3','Mon meilleur amis depuis tout petit !3',"https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg",new Date(),0)
    ]
    getAllFaceSnaps():Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps') ;
    }
    getFaceSnapById(FaceSnapId : number):Observable<FaceSnap>{
      return this.http.get<FaceSnap>('http://localhost:3000/facesnaps/'+FaceSnapId) ;
    }
    snapFaceSnapById(FaceSnapId : number, snapType: 'snap' | 'unsnap') :Observable<FaceSnap> {
      return this.getFaceSnapById(FaceSnapId).pipe(
        map(FaceSnap =>({
          ...FaceSnap,
          snaps: FaceSnap.snaps + (snapType==='snap' ? +1 : -1)
        })),
        switchMap(updatedFaceSnap =>
          this.http.put<FaceSnap>('http://localhost:3000/facesnaps/'+FaceSnapId, updatedFaceSnap)
        )
      )
    }
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) :Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
        map(faceSnaps => [...faceSnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length-1]),
        map(previousFacesnap => ({
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps',newFacesnap)
      )
    )
  }
}
