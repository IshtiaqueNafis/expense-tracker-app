import React from 'react';
import './HomePage.css';
import TransactionForm from "../TransactionForm/TransActionForm";

const HomePage = () => {
    return (
        <div className={'container'}>
            <div className={'content'}>
                transaction list
            </div>
            <div className={'sidebar'}>
                <TransactionForm/>
            </div>
        </div>
    );
};

export default HomePage;
