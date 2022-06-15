import { DataStore, Server } from "./";

export class Client {
  store: DataStore = {
    timestamp: 0,
    data: undefined,
  };

  constructor(public server: Server) {}

  synchronize(): void {
    let updatedStore = this.server.synchronize(this.store);
    if (updatedStore) {
      this.store = updatedStore;
    }
  }

  update(data: string): void {
    this.store.data = data;
    this.store.timestamp = Date.now();
  }
}
