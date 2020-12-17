import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{
  public interval: Subscription;

  constructor() {
    /* this.retornaObservable().pipe(
      retry(2)
     ).
    subscribe( valor => console.log('subs: ', valor ),
                    (error) => console.log('el error es: ' + error),
                    () => console.log('obs terminado')
    ); */
    this.interval = this.retornaIntervalo().subscribe(
      console.log
    );
  }
  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }
  retornaIntervalo(): Observable<number>{
    const interval$ = interval(500).pipe(
          filter(valor => (valor % 2 === 0 ) ? true : false),
          // take(10),
          map( valor => {
            return  valor;
          })
    );
    return interval$;
  }

  retornaObservable(): Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          i = 0;
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }


}
