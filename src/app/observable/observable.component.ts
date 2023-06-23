import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  constructor() {}

  obs = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    // setTimeout(() => {
    //   observer.error('Error en el stream');
    // }, 4000);
    setTimeout(() => {
      observer.complete();
    }, 5000);
  });
  
  ngOnInit(): void {
    this.obs.subscribe({
      next: (value) => console.log(value),
      error: () => console.log('Error'),
      complete: () => console.log('Complete'),
    });
  }
}
