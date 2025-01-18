import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { CurrencyPipe } from '@angular/common';
import { Balance } from './models/balance.model';
import { formatCurrency } from './helpers/formatCurrency.helper';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyPipe],
})
export class AppComponent {
  balance: Balance = {
    id: '',
    userId: '',
    currentAccount: '',
    investmentsAccount: [{ fixedIncome: '', variableIncome: '' }],
  };

  depositsFormated: string = '';
  transfersFormated: string = '';
  deposits: number = 0;
  transfers: number = 0;

  constructor(
    private apiService: ApiService,
    private currencyPipe: CurrencyPipe
  ) {
    this.apiService.getBalance().subscribe((res) => {
      this.balance = {
        id: res.id,
        userId: res.userId,
        currentAccount: formatCurrency(this.currencyPipe, res.currentAccount),
        investmentsAccount: [
          {
            fixedIncome: formatCurrency(this.currencyPipe, res.fixedIncome),
            variableIncome: formatCurrency(
              this.currencyPipe,
              res.variableIncome
            ),
          },
        ],
      };
    });

    this.apiService.getTransactions().subscribe((res) => {
      this.deposits = res
        .filter((transaction: Transaction) => transaction.type === 'deposito')
        .reduce((acc: number, transaction: Transaction) => {
          return (acc += transaction.value);
        }, 0);

      this.depositsFormated = formatCurrency(this.currencyPipe, this.deposits);

      this.transfers = res
        .filter((transaction: Transaction) => transaction.type === 'saque')
        .reduce((acc: number, transaction: Transaction) => {
          return (acc += transaction.value);
        }, 0);

      this.transfersFormated = formatCurrency(
        this.currencyPipe,
        this.transfers
      );
    });
  }
}
