import React from 'react';
import {inject, observer} from 'mobx-react';

import NewItem from './NewItem';
import Items from './Items';
import Filter from './Filter';

const PackedItems = inject('itemList')(
  observer(({itemList}) => {
    return (
      <Items
        title="Packed Items"
        items={itemList.filteredPackedList}>
        <Filter
          searchTerm={itemList.packedItemsFilter}
          onChange={itemList.updatePackedItemsFilter}
        />
      </Items>
    )
  }),
);

const UnpackedItems = inject('itemList')(
  observer(({itemList}) => {
    return (
      <Items
        title="Unpacked Items"
        items={itemList.unpackedItems}
        >
        <Filter
          searchTerm={itemList.unpackedItemsFilter}
          onChange={itemList.updateUnpackedItemsFilter}
        />
      </Items>
    )
  }),
);

const MarkAllAsUnpacked = inject('itemList')(({ itemList }) => (
  <button className="full-width" onClick={itemList.unpackAllItems}>
    Mark All as Unpacked
  </button>
));

const Application = () => {
  return (
    <div className="Application">
      <NewItem/>
      <UnpackedItems />
      <PackedItems />
      <MarkAllAsUnpacked />
    </div>
  );
};

export default Application;
