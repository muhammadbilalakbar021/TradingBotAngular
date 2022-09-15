import { StoreModule } from '@ngrx/store';
import {
  userFeatureKey,
  reducer,
} from './../../shared/store/reducer/user.reducer';
import {
  TableComponent,
  ActionButtonsComponent,
} from '../../shared/material/table/table.component';
import { DotLoaderComponent } from './../../utils/loaders/dotloader.component';
import { EcholoaderComponent } from './../../utils/loaders/echoloader.component';
import { LineloaderComponent } from './../../utils/loaders/lineloader.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { LineChartComponent } from 'src/app/shared/components/graphs/linechart.component';
import { CandleStickChartComponent } from 'src/app/shared/components/graphs/candlestickchart.component';
import { MatCardModule } from '@angular/material/card';
import * as CanvasJSAngularChart from '../../../assets/canvas/canvasjs.angular.component';
import { TwoDotloaderComponent } from 'src/app/utils/loaders/twodotsloader.component';
import { WindowLoaderComponent } from 'src/app/utils/loaders/windowloader.component';
import { MatButtonModule } from '@angular/material/button';
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
    LineloaderComponent,
    TwoDotloaderComponent,
    EcholoaderComponent,
    WindowLoaderComponent,
    DotLoaderComponent,
    TableComponent,
    ActionButtonsComponent,
  ],
  exports: [NgxSpinnerModule],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    StoreModule.forFeature(userFeatureKey, reducer),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
