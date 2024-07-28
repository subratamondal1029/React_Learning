import { useContext } from "react";
import { expensessContext } from "../contexts/ExpenssesContext";

export const useExpense = () => useContext(expensessContext)