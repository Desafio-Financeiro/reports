import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut-chart',
  imports: [ChartModule],
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent {
  data = {
    labels: ['Débitos', 'Créditos'],
    datasets: [
      {
        data: [36000, 14000],
        backgroundColor: ['#2567F9', '#F1823D'],
        borderWidth: 0,
      },
    ],
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#fff',
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            return `R$ ${value.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
    },
  };
}
