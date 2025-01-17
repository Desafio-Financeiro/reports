import { Injector, NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DoughnutChartModule } from './doughnut-chart/doughnut-chart.module';
import { BarChartModule } from './bar-chart/bar-chart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule, DoughnutChartModule, BarChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const tagName = 'angular-app-component';
    if (!customElements.get(tagName)) {
      const element = createCustomElement(AppComponent, { injector });
      customElements.define(tagName, element);
    }
  }
}
