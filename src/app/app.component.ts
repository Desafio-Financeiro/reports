import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { CurrencyPipe } from '@angular/common';
import { Balance } from './models/balance.model';
import { formatCurrency } from './helpers/formatCurrency.helper';

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
  }
}
