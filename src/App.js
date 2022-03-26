import React, { useState } from 'react';
import './App.css';
import SingleExpense from './Components/SingleExpense';
import { useSelector,useDispatch } from 'react-redux';
import { addIncome,addExpense } from './Store/Action/action';

// const data = [{
//   name: 'Rent',
//   value: '$2000',
// },
// {
//   name: 'Food',
//   value: '$300',
// },
// ]
const App = () => {
  const [expenseon,setExpenseon] = useState("");
  const [price,setPrice] = useState("");
  const data = useSelector(state => state.add.balanceArr);
  const total = useSelector(state => state.add.total);
  const incomeValue = useSelector(state => state.add.income);
  const expenseValue = useSelector(state => state.add.expense);
  console.log('data', data);

  const dispatch = useDispatch();

  const handleText = (e) => {
      setExpenseon(e.target.value);
  }

  const handlePrice = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPrice = parseInt(price,10);
    if(newPrice > 0) {
      dispatch(addIncome("income",expenseon,newPrice));
    }
    else {
      dispatch(addExpense("expense",expenseon,newPrice))
    }
    setExpenseon("");
    setPrice("");
  }

  return (
    <>
      <div className='wrapper'>
        <h3 className='main-title'>Expense Tracker</h3>
        <div className='container'>
          <h4>Your Balance</h4>
          <h2>${total}</h2>
          <div className='income-expense'>
            <div className='income'>
              <h4>INCOME</h4>
              <h3 className='income-money'>${incomeValue}</h3>
            </div>
            <div className='expense'>
              <h4>EXPENSE</h4>
              <h3 className='expense-money'>${expenseValue}</h3>
            </div>
          </div>
          {data && data.length > 0 && (<h4 className='history'>History</h4>)}
          <div className='single-expense-wrapper'>
            <SingleExpense data={data} />
          </div>
          <h4 className='transaction-title'>Add Transaction history</h4>
          <form id="form" onSubmit={handleSubmit}>
            <div>
              <label>Text</label>
              <div>
                <input type="text" placeholder="Enter text..." onChange={handleText} />
              </div>
            </div>
            <div>
              <label >Price(- is for Expenses & + is for Income)</label>
              <div>
                <input type="text" placeholder="Enter amount..." onChange={handlePrice}/>
              </div>
            </div>
            <button className='btn'>Add Transaction</button>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default App