import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent {
  deposits: number = Number(sessionStorage.getItem('deposits') || 0) / 100;
  transfers: number = Number(sessionStorage.getItem('transfers') || 0) / 100;

  data = {
    labels: ['Transferências', 'Depósitos'],
    datasets: [
      {
        data: [this.transfers, this.deposits],
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
