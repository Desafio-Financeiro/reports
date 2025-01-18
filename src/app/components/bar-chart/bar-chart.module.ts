import { Injector, NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart.component';
import { createCustomElement } from '@angular/elements';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [BarChartComponent],
  imports: [ChartModule],
  exports: [BarChartComponent],
})
export class BarChartModule {
  constructor(private injector: Injector) {
    const tagName = 'angular-bar-chart-component';
    if (!customElements.get(tagName)) {
      const element = createCustomElement(BarChartComponent, { injector });
      customElements.define(tagName, element);
    }
  }
}
