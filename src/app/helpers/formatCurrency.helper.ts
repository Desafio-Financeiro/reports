import { CurrencyPipe } from '@angular/common';

export const formatCurrency = (pipe: CurrencyPipe, value?: string | number) => {
  return pipe.transform(value, 'BRL', 'symbol')?.replace('R$', 'R$ ') || '';
};
