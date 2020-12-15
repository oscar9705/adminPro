import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css' ]
})
export class ProgressComponent  {

  constructor() { }
 progreso1 = 0;
 progreso2 = 0;

 get getProgreso1(): string {
   return `${this.progreso1 }%`;
 }
 get getProgreso2(): string {
  return `${this.progreso2 }%`;
}

  // tslint:disable-next-line: typedef
  cambioValorHijo(valor: number){
    console.log(valor);
  }
}

