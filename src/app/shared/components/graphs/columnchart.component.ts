import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: '../../templates/graphs/graph.component.html',
  styles: [],
})
export class ColumnChartComponent implements OnInit {
  chart: any;
  width = 100;

  chartOptions = {
    title: {
      text: 'Angular Column Chart',
    },
    animationEnabled: true,
    data: [
      {
        type: 'column',
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 95 },
          { x: 60, y: 68 },
          { x: 70, y: 28 },
          { x: 80, y: 34 },
          { x: 90, y: 14 },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
