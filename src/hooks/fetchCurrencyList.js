import { useEffect, useState } from "react";

export default function useFetchAllCurrencies(setCurrencyList) {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';

    useEffect(() => {
        (async () => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    const currencies = Object.keys(json.usd);
                    setCurrencyList(currencies.map(currency => currency));
                });
        })();
    }, []);
}
