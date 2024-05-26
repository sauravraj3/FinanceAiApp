export interface ExpensesByCategory {
  salarie: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
    id: string;
    date: string;
    revenue: number;
    expenses: number;
  }
export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Date>;
}
