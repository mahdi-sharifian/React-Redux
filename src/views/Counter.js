import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import {increment, decrement} from '../state-management/actions/countAction'

export const Counter = () => {

    const counter = useSelector(state => state.countState);
    const dispatch = useDispatch();

    return (
        <div>
            <label>Counter Value : {counter}</label>
            <br />
            <button className='btn btn-lg btn-primary m-1' onClick={() => dispatch(increment())}>+</button>
            <button className='btn btn-lg btn-primary m-1' onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
