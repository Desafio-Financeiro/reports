import { Component } from '@angular/core';
import { GroupedTransaction } from '../../helpers/groupTransactionsByMonth';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  transactions: GroupedTransaction[] = JSON.parse(
    sessionStorage.getItem('transactions') || ''
  );
  months: string[] = this.transactions.map((month) => month.monthName);
  deposits: number[] = this.transactions.map((month) => {
    return (
      month.transactions.reduce((acc: number, transaction: Transaction) => {
        if (transaction.type === 'deposito') {
          return (acc += transaction.value);
        }

        return (acc += 0);
      }, 0) / 100
    );
  });
  transfers: number[] = this.transactions.map((month) => {
    return (
      month.transactions.reduce((acc: number, transaction: Transaction) => {
        if (transaction.type === 'saque') {
          return (acc += transaction.value);
        }

        return (acc += 0);
      }, 0) / 100
    );
  });

  basicData = {
    labels: this.months,
    datasets: [
      {
        label: 'Saques',
        backgroundColor: '#2567F9',
        data: this.transfers,
      },
      {
        label: 'Depósitos',
        backgroundColor: '#F1823D',
        data: this.deposits,
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
