import React from 'react'

const SingleExpense = ({data}) => {
    console.log('propsData', data);
  return (
      <>
      {data.map(item => (
            <div className={`single-expense ${item.type === "INCOME" ? 'border-income' : 'border-expense'}`}>
                <div>{item.title}</div>
                <div>${item.priceValue}</div>
            </div>
      ))}
      </>
    
  )
}

export default SingleExpense