import { Injectable } from '@angular/core';
import {IStorage} from "./storage";
import {StorageExceptionAddItem, StorageExceptionDeleteItem, StorageExceptionGetItem} from "./exceptions";


@Injectable({
  providedIn: 'root'
})
export class StorageLocalService implements IStorage{
  constructor() { }

  addItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      throw new StorageExceptionAddItem();
    }
  }

  deleteItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      throw new StorageExceptionDeleteItem();
    }
  }

  getItem<T>(key: string): T {
    try {
      const value =localStorage.getItem(key);
      if(!value){
        throw new StorageExceptionGetItem();
      }
      return <T>JSON.parse(value);
    } catch (e) {
      throw new StorageExceptionGetItem();
    }
  }

  reset(): void {
    localStorage.clear();
  }
}
