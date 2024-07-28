import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const correncyInfo = useCurrencyInfo(from);

  const options = Object.keys(correncyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * Number(correncyInfo[to].toFixed(2)));
  };


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 flex justify-center flex-col items-center">
        <img src="https://play-lh.googleusercontent.com/QZ--XUsfoJJdPVGS-bAEdws8QSHWRjtP-tKeapKM9tYNRE0vN1dvrv6-y_JEcgvx8Ok=w600-h300-pc0xffffff-pd" alt="Logo" className="w-28 p-2" title="Currency Exchange"/>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectOptions={options}
                amountdisable={false}
                selectCurrency={from}
                amountChanger={(amount) => setAmount(amount)}
                currencyChanger={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(2)}
                selectOptions={options}
                amountdisable={true}
                selectCurrency={to}
                currencyChanger={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
