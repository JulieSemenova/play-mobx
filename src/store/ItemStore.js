import {observable, computed, action} from 'mobx';
import Item from './ItemModel';

export default class ItemStore {
  @observable items = [];
  @observable unpackedItemsFilter = '';
  @observable packedItemsFilter = '';

  @computed get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter(item => item.unpacked);
  }

  @computed get filteredPackedList() {
    return this.packedItems.filter(item =>
      item.value.includes(this.packedItemsFilter)
    );
  }

  @computed get filteredUnpackedList() {
    return this.unpackedItems.filter(item =>
      item.value.includes(this.unpackedItemsFilter)
    );
  }

  @action.bound
  addItem(value) {
    this.items.push(new Item(value, this));
  }

  @action.bound
  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }

  @action.bound
  updatePackedItemsFilter(value) {
    this.packedItemsFilter = value;
  }

  @action.bound
  updateUnpackedItemsFilter(value) {
    this.unpackedItemsFilter = value;
  }

  @action.bound
  unpackAllItems() {
    this.items.forEach(item => item.packed = false);
  }
}
