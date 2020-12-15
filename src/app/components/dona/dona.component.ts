import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
   // Doughnut
   // tslint:disable-next-line: no-input-rename
  @Input('titulo') cardTitle = 'Sin titulo';
  // tslint:disable-next-line: no-input-rename
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line: no-input-rename
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  // cambiar los colores con el atributo [colors] y se le pasa la propiedad de tipo arreglo de Color Color[]
  public colors: Color[] = [{backgroundColor: ['#6857E6', '#009FEE', '#F']} ];
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
