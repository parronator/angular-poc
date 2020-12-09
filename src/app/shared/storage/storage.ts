export interface IStorage {
  addItem<T>(key: string, value: T):void;
  getItem<T>(key: string):T;
  deleteItem(key: string):void;
  reset():void;
}
