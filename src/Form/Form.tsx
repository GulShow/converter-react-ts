import React, {Dispatch, FC, FormEvent, SetStateAction} from 'react';
import './Form.css';
import Select from '../Select/Select';
import Input from '../Input/Input';

interface Form {
    convert: (e:FormEvent) => Promise<void>,
    toCurrencies:Array<string>,
    value: number,
    toCurrency: string,
    result: number,
    setToCurrency: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<number>>
}

const Form:FC<Form> = ({convert, toCurrencies, value, toCurrency, result, setToCurrency, setValue}) => {
    const UAH = "UAH";
    return (
        <div className="container">
            <form onSubmit={convert} className="form decor">
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className="inputDiv">
                    <label className="inputLabel">UAH:</label>
                    <Input value={value} setValue={setValue}/>
                </div>
                <div className="inputDiv">
                    <label>To currency:</label>
                    <Select toCurrencies={toCurrencies} toCurrency={toCurrency} setToCurrency={setToCurrency}/>
                </div>
                <button type="submit" className="button">convert</button>
            </form>
            <div className="result">
                {value} {UAH} is {result.toFixed(2)} {toCurrency}
            </div>
        </div>
    )
}
export default Form
