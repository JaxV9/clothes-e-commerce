import { Injectable, signal } from '@angular/core';

@Injectable()
export class StoreService {
  store = signal<Record<string, unknown[]>>({});

  addItemToStore(key: string, value: unknown[]): void {
    const test = key;
    this.store.update((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  removeItemToStore(key: string): void {
    this.store.update((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  }
}
