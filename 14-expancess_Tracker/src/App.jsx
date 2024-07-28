import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ExpanseTable from "./components/ExpanseTable";
import ExpenseForm from "./components/ExpenseForm";
import ExpenssesProvider from "./contexts/ExpenssesContext";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  return (
    <ExpenssesProvider>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          {<ExpenseForm expenceState={[expense, setExpense]}/>}
          {<ExpanseTable setExpense={setExpense}/>}
        </div>
      </main>
    </ExpenssesProvider>
  );
}

export default App;
