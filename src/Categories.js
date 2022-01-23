import React from 'react';

const Categories = ({filteritems, items}) => {
  console.log(items);
  return (
    <div className='btn-container'>
    {items && items.map((item,index) => {
      return (
        <button key={index} type='button' className='filter-btn' onClick={() => filteritems(item)}>{item}</button>
      )
    })}
    </div>
  )
};

export default Categories;
