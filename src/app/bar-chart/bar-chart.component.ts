import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar-chart',
  imports: [ChartModule],
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  basicData = {
    labels: ['Outubro', 'Novembro', 'Dezembro', 'Janeiro'],
    datasets: [
      {
        label: 'Débitos',
        backgroundColor: '#2567F9',
        data: [66000, 49000, 81000, 36000],
      },
      {
        label: 'Créditos ',
        backgroundColor: '#F1823D',
        data: [68000, 18000, 60000, 14000],
      },
    ],
  };

  basicOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
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
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
      },
    },
  };
}
