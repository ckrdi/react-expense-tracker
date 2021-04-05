import './App.css';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
