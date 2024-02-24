export default function CurrencyInput({ label, amount, setAmount, currentCurrency, setCurrentCurrency, allCurrencies }) {
    return (
        <div className="flex flex-col bg-white rounded-lg px-3 py-2">
            <div className="flex justify-between items-center">
                <div>{label.toUpperCase()}</div>
                <div>CURRENCY UNITS</div>
            </div>
            <div className="flex justify-between items-center">
                <input
                    placeholder="Enter"
                    title="the count of the currency"
                    className="outline-none"
                    type="number"
                    name=""
                    id={label}
                    value={amount}
                    min={1}
                    onChange={evnt => setAmount && setAmount(evnt.currentTarget.value)} />
                <select
                    title={label}
                    className="outline-none bg-gray-100 hover:bg-gray-200 p-2 rounded-xl"
                    value={currentCurrency}
                    onChange={evnt => setCurrentCurrency(evnt.currentTarget.value)}
                    name=""
                    id=""
                >
                    {allCurrencies.map(currencySym => <option key={label+currencySym} value={currencySym}>{currencySym.toUpperCase()}</option>)}
                </select>
            </div>
        </div>
    );
}