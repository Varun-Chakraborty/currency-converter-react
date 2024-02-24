import { useEffect, useState } from "react";

export default function useFetchCurrencyRates(currency1, currency2, setRate) {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1}/${currency2}.json`;

    useEffect(() => {
        (async () => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    setRate(json[currency2]);
                });
        })();
    }, [currency1, currency2]);
}