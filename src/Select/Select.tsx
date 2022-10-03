import React, {Dispatch, SetStateAction, FC} from 'react';
import './Select.css';

interface Select {
    toCurrency: string,
    toCurrencies: Array<string>,
    setToCurrency: Dispatch<SetStateAction<string>>
}

const Select:FC<Select> = ({toCurrency , toCurrencies , setToCurrency}) => {
    return (
        <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select"
        >
            {toCurrencies.map((c) => (
                <option key={c}>{c}</option>
            ))}
        </select>
    )
}
export default Select
