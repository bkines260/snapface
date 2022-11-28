import { Component, OnInit } from '@angular/core';
// import {interval, Observable,of} from 'rxjs'
// import {filter, map, tap, mergeMap,take, delay,concatMap,exhaustMap,switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // interval$!: Observable<string>;
  // lightObservable$!: Observable<string>;
  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0 ;
  ngOnInit(){
    // this.interval$ = interval(1000).pipe(
    //   filter(value => value%3 ===0),
    //   map(value => value % 2 === 0 ? `je suis ${value} et je suis pair` : `je suis ${value} et je suis impair`),
    //   tap(text => this.logger(text))
    // );
    // this.lightObservable$.pipe(
    //     mergeMap(color => this.getTrainObservable$(color))
    // ).subscribe();

    // interval(500).pipe(
    //   take(10),
    //   map(value => value % 2 ===0 ? 'rouge' : 'jaune'),
    //   tap(color => console.log(`La lumiere s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //   switchMap(color => this.getTrainObservable$(color)),
    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé`))
    // ).subscribe();
  }
  // 1 observable click bouton ==> observable extérieur ==> haut niveau souscrit aux observables intérieurs selon ses émissions(camera 1 ou camera 2)
  // selon la selection on ira souscrire au flux correspondant ==> observables intérrieurs
  // logger(text :string){
  //   console.log(text)
  // }
  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }
  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }
}
