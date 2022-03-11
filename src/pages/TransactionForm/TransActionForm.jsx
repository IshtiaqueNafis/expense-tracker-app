import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createExpenseAsync} from "../../redux/reducers/ExpenseSliceReducer";

const TransactionForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            amount,
        })

        dispatch(createExpenseAsync({name, amount}));
    }

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    )
};
export default TransactionForm;