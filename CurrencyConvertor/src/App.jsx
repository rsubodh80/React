import { useState } from 'react';
import { InputBox } from "./component";
import useCurrencyinfo from './hookes/Usecurrencyinfo';



import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
    setResult(amount * currencyInfo[to]);
  };
 
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('https://images.pexels.com/photos/32633647/pexels-photo-32633647.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 text-black">
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
                currencyOptions={options}
                onCurrencyChange={(curr) => setFrom(curr)}   // ✅ Fixed prop name
                onAmountChange={(val) => setAmount(Number(val))}
                selectedCurrency={from}
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
                amount={result.toFixed(2)}
                currencyOptions={options}
                onCurrencyChange={(curr) => setTo(curr)}     // ✅ Fixed prop name
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
