import { CurrencyPipe } from '@angular/common';

export const formatCurrency = (pipe: CurrencyPipe, value?: string | number) => {
  return (
    pipe
      .transform(Number(value) / 100, 'BRL', 'symbol', '1.2-2')
      ?.replace('-R$', 'R$ - ')
      .replace('R$', 'R$ ') || ''
  );
};
