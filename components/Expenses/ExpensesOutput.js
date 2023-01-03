import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 49.99,
    date: new Date('2022-01-05')
  },
  {
    id: 'e3',
    description: 'A pair of bananas',
    amount: 39.99,
    date: new Date('2022-02-15')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 19.99,
    date: new Date('2022-02-25')
  },
  {
    id: 'e5',
    description: 'A note',
    amount: 49.99,
    date: new Date('2022-03-25')
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
