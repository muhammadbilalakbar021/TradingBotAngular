import { LoaderDirective } from './../../shared/directives/loader.directive';
import { TwolineloaderComponent } from './../../utils/loaders/twolineloader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DonutChartComponent } from './../../shared/components/graphs/donutchart.component';
import { ColumnChartComponent } from './../../shared/components/graphs/columnchart.component';
import { NavbarComponent } from './../../shared/components/navbar/navbar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { LineChartComponent } from 'src/app/shared/components/graphs/linechart.component';
import { CandleStickChartComponent } from 'src/app/shared/components/graphs/candlestickchart.component';
import { MatCardModule } from '@angular/material/card';
import * as CanvasJSAngularChart from '../../../assets/canvas/canvasjs.angular.component';
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
    TwolineloaderComponent,
    LoaderDirective,
  ],
  exports: [NgxSpinnerModule],
  imports: [CommonModule, HomeRoutingModule, NgxSpinnerModule, MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
