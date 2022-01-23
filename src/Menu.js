import React,{ useState } from 'react';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, image, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={image} className='photo'/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-test'>{desc}</p>
            </div>
          </article>
        )
      }
      )
      }
    </div>
  )
};

export default Menu;
