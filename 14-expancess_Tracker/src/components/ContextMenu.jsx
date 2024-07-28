import { useState } from "react";
import { toast } from "react-toastify";

const ContextMenu = ({ ContextDtailState, expencessState, setExpense }) => {
  const [{ top, left, rowId }, setContextMenu] = ContextDtailState;
  const [expencess, setExpensess] = expencessState;

  function handleClick(e) {
    const buttonType = e.target.textContent;
    if (buttonType === "Edit") {
      const [row] = expencess.filter((expence) => expence.id === rowId);
      setExpense(row)
    } else {
      setExpensess((prev) => {
        return prev.filter((expence) => {
          if (expence.id !== rowId) {
            return expence;
          } else toast.success(`${expence.title} Has been Deleted`);
        });
      });
    }

    setContextMenu((prev) => ({ ...prev, isOpen: false }));
  }

  return (
    <div className="context-menu" style={{ top, left }}>
      <div onClick={handleClick}>Edit</div>
      <div onClick={handleClick}>Delete</div>
    </div>
  );
};

export default ContextMenu;
