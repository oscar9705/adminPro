import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  labels: Label[] = ['ventas de descargas', 'vetnas en la tienda', 'ventas por correo'];
  data: MultiDataSet = [
    [500, 750, 500]
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
