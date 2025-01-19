export interface Transaction {
  createdAt: string;
  id: string;
  type: 'saque' | 'deposito';
  userId: string;
  value: number;
}
