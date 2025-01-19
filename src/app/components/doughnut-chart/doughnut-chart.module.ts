import { Injector, NgModule } from '@angular/core';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { createCustomElement } from '@angular/elements';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [DoughnutChartComponent],
  imports: [ChartModule],
  exports: [DoughnutChartComponent],
})
export class DoughnutChartModule {
  constructor(private injector: Injector) {
    const tagName = 'angular-doughnut-chart-component';
    if (!customElements.get(tagName)) {
      const element = createCustomElement(DoughnutChartComponent, { injector });
      customElements.define(tagName, element);
    }
  }
}
