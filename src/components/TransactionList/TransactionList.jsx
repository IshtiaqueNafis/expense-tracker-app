import React from 'react';
import '../../pages/Home/HomePage.css'
import {useDispatch} from "react-redux";
import {deleteExpenseAsync} from "../../redux/reducers/ExpenseSliceReducer";

const TransactionList = ({transactions}) => {
    const dispatch = useDispatch()
    return (
        <ul className={'transactions'}>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={'name'}>{transaction.name}</p>
                    <p className={'amount'}>${transaction.amount}</p>
                    <button onClick={()=>dispatch(deleteExpenseAsync({id:transaction.id}))}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;
