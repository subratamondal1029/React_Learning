import React, { useState } from "react";
import { useExpense } from "../hooks/useExpense";
import ContextMenu from "./ContextMenu";
import { useFilter } from "../hooks/useFilter";

const ExpanseTable = ({ setExpense }) => {
  const [expencess, setExpensess] = useExpense();
  const [ContextMenuDetail, setContextMenu] = useState({ isOpen: false });
  let [filteredData, setQuery] = useFilter(expencess, (data) => data.category);
  const [sortCallBack, setSortCallBack] = useState(() => () => {});

  return (
    <>
      <table
        className="expense-table"
        onClick={() =>
          ContextMenuDetail.isOpen && setContextMenu({ isOpen: false })
        }
      >
        <thead>
          <tr>
            <th className="title-column">
              <div>
                <span>Title</span>
                <svg
                  onClick={() =>
                    setSortCallBack(
                      () => (a, b) => a.title.localeCompare(b.title)
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={() =>
                    setSortCallBack(
                      () => (a, b) => b.title.localeCompare(a.title)
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select
                onChange={(e) => setQuery(e.target.value)}
                title="Category"
              >
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  onClick={() =>
                    setSortCallBack(() => (a, b) => a.amount - b.amount)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={() =>
                    setSortCallBack(() => (a, b) => b.amount - a.amount)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(sortCallBack).map((expense) => {
            return (
              <tr
                key={expense.id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextMenu({
                    isOpen: true,
                    top: e.pageY,
                    left: e.pageX,
                    rowId: expense.id,
                  });
                }}
              >
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>₹{expense.amount}</td>
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            <th className="clear-sort" onClick={() => setSortCallBack(()=> ()=> {})}>Clear Sort</th>
            <th>
              ₹
              {filteredData
                .sort(sortCallBack)
                .reduce((acc, expense) => acc + Number(expense.amount), 0)}
            </th>
          </tr>
        </tbody>
      </table>
      {ContextMenuDetail.isOpen && (
        <ContextMenu
          ContextDtailState={[ContextMenuDetail, setContextMenu]}
          expencessState={[expencess, setExpensess]}
          setExpense={setExpense}
        />
      )}
    </>
  );
};

export default ExpanseTable;
