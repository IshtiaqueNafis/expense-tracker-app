import React from 'react';
import './HomePage.css';
import TransactionForm from "../TransactionForm/TransActionForm";
import useFireStoreCollection from "../../hooks/useFireStoreCollection";
import {listenToExpenseFromFIreStore} from "../../fireStore/fireStoreService";
import {useDispatch, useSelector} from "react-redux";
import {getExpenseDataAsync} from "../../redux/reducers/ExpenseSliceReducer";
import TransactionList from "../../components/TransactionList/TransactionList";

const HomePage = () => {
    const dispatch = useDispatch();
    const {loading, error, expenseData} = useSelector(state => state.expense)
    const {uid} = useSelector(state => state.auth.user);

    useFireStoreCollection({
        query: () => listenToExpenseFromFIreStore().where("uid", "==", uid).orderBy('createdAt','desc'),
        data: expenses => dispatch(getExpenseDataAsync({expenses})),
        deps: [dispatch]
    })


    return (
        <>
            {error && <div>'error</div>}
            <div className={'container'}>
                <div className={'content'}>
                    {expenseData && <TransactionList  transactions={expenseData}/>}
                </div>
                <div className={'sidebar'}>
                    <TransactionForm/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
