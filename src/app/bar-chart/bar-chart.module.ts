import { Injector, NgModule } from "@angular/core";
import { BarChartComponent } from "./bar-chart.component";
import { createCustomElement } from "@angular/elements";
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [BarChartComponent],
  imports: [ChartModule],
  exports: [BarChartComponent],
})
export class BarChartModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(BarChartComponent, {
      injector: injector,
    });
    customElements.define("angular-bar-chart-component", element);
  }
}
