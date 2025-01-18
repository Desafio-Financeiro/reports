export interface Balance {
  id: string;
  userId: string;
  currentAccount: string | null;
  investmentsAccount: [
    { fixedIncome: string | null; variableIncome: string | null }
  ];
}
