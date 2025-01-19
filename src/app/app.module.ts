import { Injector, NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { DoughnutChartModule } from './components/doughnut-chart/doughnut-chart.module';
import { BarChartModule } from './components/bar-chart/bar-chart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChartModule,
    DoughnutChartModule,
    BarChartModule,
    HttpClientModule,
  ],
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
