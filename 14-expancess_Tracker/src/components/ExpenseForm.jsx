import { useExpense } from "../hooks/useExpense";
import { toast } from "react-toastify";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({expenceState}) => {
  const [expensess, setExpensess] = useExpense();

  const inisialExpense = {
    title: "",
    category: "",
    amount: "",
  };
  const [expense, setExpense] = expenceState;

  const validationRules = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 3, message: "Title should be at least 3 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [{ required: true, message: "Please enter an amount" }],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let errorData = [];

    Object.entries(expense).forEach(([key, value]) => {
      if (key !== "id") {
        validationRules[key].some((rule) => {
          if (rule.required && !value) {
            errorData.push(rule.message);
            return true;
          }

          if (rule.minLength && value.length < rule.minLength) {
            errorData.push(rule.message);
            return true;
          }
        });
      }
    });

    if (!errorData.length) {
      if (expense.id) {
        expensess.forEach((currentExpense, i) => {
          if (currentExpense.id === expense.id) {
            expensess.splice(i, 1, expense)
            toast.success(`${expense.title} Has been Update`)
          }
        });
      }else{
        setExpensess((prev) => [
          ...prev,
          { ...expense, id: crypto.randomUUID() },
        ]);
        toast.success(`${expense.title} has been Added`);
      }
      setExpense(inisialExpense);
    } else {
      errorData.forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <form className="expense-form" onSubmit={handleAdd}>
      <Input
        id="title"
        name="title"
        type="text"
        value={expense.title}
        changeEvent={handleChange}
        label="Title"
      />
      <Select
        id="category"
        name="category"
        value={expense.category}
        changeEvent={handleChange}
        label="Category"
        options={[
          "default",
          "Grocery",
          "Clothes",
          "Bills",
          "Education",
          "Medicine",
        ]}
      />
      <Input
        id="amount"
        name="amount"
        type="number"
        value={expense.amount}
        changeEvent={handleChange}
        label="Amount"
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
