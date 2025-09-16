import { Injectable, signal } from '@angular/core';

@Injectable()
export class StoreService {
  store = signal<Record<string, unknown[]>>({});

  addItem(key: string, value: unknown[]): void {
    const test = key;
    this.store.update((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  removeItem(key: string): void {
    this.store.update((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  }

  updateItem(key: string, value: unknown, oldValue?: unknown): void {
    if (oldValue) {
      this.store.update((store) => {
        const index = store[key].findIndex((prev) => prev === oldValue);
        if (index !== -1) {
          const updatedArray = [...store[key]];
          updatedArray[index] = value;
          return {
            ...store,
            [key]: updatedArray,
          };
        }
        return store;
      });
    }
  }
}
