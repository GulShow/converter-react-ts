import React, { useMemo, useState, useEffect, FormEvent } from "react";
import './App.css';
import Form from './Form/Form';

const useFetch = (url:string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [url]);

  return {data};
};

interface CurrencyObject {
  USD: object,
  GBP: object,
  EUR: object,

}

function App() {
  const [value, setValue] = useState(0);
  const [fromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencies] = useState(["EUR", "USD", "GBP"]);
  const [result, setResult] = useState(0);
  const select = document.querySelector('select');
   const objOfCurrencies:CurrencyObject = {USD: {} , GBP: {} , EUR: {}};
  const toCurrencies = useMemo(() => {
    return currencies.filter((c) => c !== fromCurrency);
  }, [currencies, fromCurrency]);
  const {data} = useFetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  const convert = async (e: FormEvent) => {
    e.preventDefault();
    objOfCurrencies.USD = data[25]
    objOfCurrencies.GBP = data[24]
    objOfCurrencies.EUR = data[32]
    const currencyValue = objOfCurrencies[select.value].rate;
    console.log(typeof value)
    console.log(value);
    console.log(currencyValue);
    setResult(+value / currencyValue);

  };
  return (
      <div id="wrapper">
        <Form convert={convert}
              toCurrencies={toCurrencies}
              value={value}
              toCurrency={toCurrency}
              result={result}
              setToCurrency={setToCurrency}
              setValue={setValue}
        />
      </div>
  );
}

export default App;

