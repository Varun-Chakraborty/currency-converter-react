import { useState } from "react";
import CurrencyInput from "./components/currencyInput";
import SpinLoader from "./components/spin-Loader.jsx";
import fetchAllCurrencies from "./hooks/fetchCurrencyList.js";
import fetchCurrencyRates from "./hooks/fetchCurrencyRates.js";

export default function App() {
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('inr');
    const [amount, setAmount] = useState(1);
    const [rate, setRate] = useState(0);
    const [allCurrencies, setAllCurrencies] = useState([]);

    fetchAllCurrencies(setAllCurrencies);
    fetchCurrencyRates(fromCurrency, toCurrency, setRate);

    let finalamount = ((amount, rate) => {
        return amount*rate
    })();

    return (
        <div className="h-screen w-screen bg-img bg-no-repeat bg-cover flex justify-center items-center">
            <div className="p-3 bg-white backdrop:blur-lg bg-opacity-40 opacity-90 rounded-xl border border-white flex flex-col items-center justify-between gap-3">
                <h1 className="font-bold font-serif text-2xl">CURRENCY CONVERTER</h1>
                <div className="flex flex-col gap-4 relative">
                    <CurrencyInput
                        label={'from'}
                        amount={amount}
                        setAmount={setAmount}
                        currentCurrency={fromCurrency}
                        setCurrentCurrency={setFromCurrency}
                        allCurrencies={allCurrencies}
                    />
                    <button
                        onClick={() => {
                            setFromCurrency(toCurrency)
                            setToCurrency(fromCurrency)
                        }}
                        className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        type="submit"
                    >SWAP</button>
                    <CurrencyInput
                        label={'to'}
                        amount={(amount * rate).toFixed(2)}
                        currentCurrency={toCurrency}
                        setCurrentCurrency={setToCurrency}
                        allCurrencies={allCurrencies}
                    />
                </div>
                <button
                    onClick={() => {
                        setFromCurrency(toCurrency)
                        setToCurrency(fromCurrency)
                    }}
                    className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-xl"
                    type="submit"
                >{rate && allCurrencies ?
                    `CONVERT ${fromCurrency.toUpperCase()} TO ${toCurrency.toUpperCase()}` :
                    <SpinLoader />
                    }</button>
            </div>
        </div>
    );
}