export type Transaction = {
  id: string;
  userId: string;
  type: 'saque' | 'deposito';
  value: number;
  createdAt: Date;
};

export type GroupedTransaction = {
  monthNumber: number;
  monthName: string;
  year: number;
  transactions: Transaction[];
};

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export function groupTransactionsByMonth(
  transactions: Transaction[]
): GroupedTransaction[] {
  const groupedByMonth = new Map<string, GroupedTransaction>();

  transactions?.forEach((transaction) => {
    const date = new Date(transaction.createdAt);
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthKey = `${year}-${month}`;

    if (!groupedByMonth.has(monthKey)) {
      groupedByMonth.set(monthKey, {
        monthNumber: month,
        monthName: months[month],
        year,
        transactions: [],
      });
    }

    groupedByMonth.get(monthKey)!.transactions.push(transaction);
  });

  return Array.from(groupedByMonth.values()).sort(
    (a, b) => b.year - a.year || a.monthNumber - b.monthNumber
  );
}
