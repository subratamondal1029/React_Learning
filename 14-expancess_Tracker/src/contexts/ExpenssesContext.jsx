import { createContext, useState } from "react"
import { ToastContainer } from "react-toastify"
import { useLocalStorage } from "../hooks/useLocalStorage"
export const expensessContext = createContext()

const ExpenssesProvider = ({children}) => {
    const expenseState = useLocalStorage("expencess", [])
  return (
   <expensessContext.Provider value={expenseState}>
    {children}
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
        bodyClassName="toastBody"
      />
   </expensessContext.Provider>
  )
}

export default ExpenssesProvider