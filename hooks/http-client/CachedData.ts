import { EventEmitter } from 'events';
import { ListenerFunction } from './types';

class CachedData<TData> extends EventEmitter {
  private _data: TData | undefined;
  private _timestamp: number | undefined;
  constructor(data?: TData) {
    super();
    if (data) {
      this._data = data;
      this._timestamp = Date.now();
    }
  }

  getData() {
    return this._data;
  }

  getTimestamp() {
    return this._timestamp;
  }

  setData(data: TData) {
    this._data = data;
    this._timestamp = Date.now();
    this.emit('changed', data);
  }

  subscribe(listener: ListenerFunction<TData>) {
    this.addListener('changed', listener);
    return () => {
      this.removeListener('changed', listener);
    };
  }
}

export default CachedData;
