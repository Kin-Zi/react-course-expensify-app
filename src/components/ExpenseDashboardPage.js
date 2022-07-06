import React from 'react';
import EpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage =() => (
    <div>   
        <ExpenseListFilters />
        <EpenseList />
    </div>
);

export default ExpenseDashboardPage;