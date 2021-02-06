import React from 'react';
import Item from './Item';

const Items = ({ title, items, children }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      {children}
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Items;
