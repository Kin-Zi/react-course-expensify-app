import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';         
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    let { id } = useParams();            
    const selectedExpense = props.expenses.find((expense) => expense.id === id)
    console.log(selectedExpense)
    const navigate = useNavigate();
    return (
        <div>
            <ExpenseForm 
                expense = {selectedExpense}
                onSubmit = {(expense => {
                    props.dispatch(editExpense(id, expense));
                    navigate('/');
                })}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id}));
                navigate('/');
            }}>Remove</button>  
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};
export default connect(mapStateToProps)(EditExpensePage);