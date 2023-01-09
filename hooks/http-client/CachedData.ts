import { Observable, ListenerFunction } from './types';

class CachedData<TData> implements Observable<TData> {
  private _data: TData | undefined;
  private _timestamp: number | undefined;
  private _listeners: ListenerFunction<TData>[];

  constructor(data?: TData) {
    if (data) {
      this._data = data;
      this._timestamp = Date.now();
    }

    this._listeners = [];
  }

  getData() {
    return this._data;
  }

  getTimestamp() {
    return this._timestamp;
  }

  setData(data: TData) {
    console.log('called setData', this);
    this._data = data;
    this._timestamp = Date.now();
    this.notify(data);
  }

  subscribe(listener: ListenerFunction<TData>) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter(
        (listernerFn) => listernerFn !== listener
      );
    };
  }

  notify(data: TData) {
    this._listeners.forEach((listener) => listener(data));
    console.log('called listener');
  }
}

export default CachedData;
