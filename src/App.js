import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => { 
    console.log("all", category);
    if(category !== 'all'){
    const newItems = items.filter((item) => item.category === category );
    setMenuItems(newItems);
    }
    else{
      setMenuItems(items);
    }
  }
  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filteritems={filterItems} items={allCategories}/>
        <Menu items={ menuItems }/>
      </section>
    </main>
  )
}

export default App;
