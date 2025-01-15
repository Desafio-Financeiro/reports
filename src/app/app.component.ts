import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
@Component({
  selector: 'app-root',
  imports: [ChartModule, DoughnutChartComponent, BarChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
