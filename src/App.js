import './App.css';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div>
      <Header />
      <IncomeExpense />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
