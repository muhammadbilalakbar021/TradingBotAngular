import { DonutChartComponent } from './../../shared/components/graphs/donutchart.component';
import { ColumnChartComponent } from './../../shared/components/graphs/columnchart.component';
import { NavbarComponent } from './../../shared/components/navbar/navbar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import * as CanvasJSAngularChart from '../../../assets/canvas/canvasjs.angular.component';
import { LineChartComponent } from 'src/app/shared/components/graphs/linechart.component';
import { CandleStickChartComponent } from 'src/app/shared/components/graphs/candlestickchart.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CanvasJSChart,
    LineChartComponent,
    ColumnChartComponent,
    DonutChartComponent,
    CandleStickChartComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
