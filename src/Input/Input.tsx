import React, {Dispatch, FC, SetStateAction} from 'react';
import './Input.css';
import {connect} from 'react-redux';


interface Input {
    value: number,
    setValue: Dispatch<SetStateAction<number>>
}


const Input:FC<Input> = ({value, setValue}) => {
    return (
        <input value={value} className="input" onChange={(e) => setValue(+e.target.value)}/>
    )
}



const mapStateToProps = state => {
    return {
        syncValue: state.value.value
    }
}

export default connect(mapStateToProps, null)(Input)
