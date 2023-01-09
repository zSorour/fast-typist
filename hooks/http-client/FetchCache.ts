import CachedData from './CachedData';
import { CacheKey, ListenerFunction } from './types';

export type CacheHashMap = Map<string, CachedData<any>>;

class FetchCache {
  private _cache: CacheHashMap;

  constructor() {
    this._cache = new Map();
  }

  getCachedData(key: CacheKey) {
    return this._cache.get(key)?.getData();
  }

  setCachedData(key: CacheKey, data: any) {
    const cachedData = this._cache.get(key);
    if (cachedData) {
      cachedData.setData(data);
    } else {
      const newCachedData = new CachedData(data);
      this._cache.set(key, newCachedData);
    }
  }

  subscribe(key: CacheKey, listener: ListenerFunction<any>) {
    let cachedData = this._cache.get(key);
    if (!cachedData) {
      cachedData = new CachedData();
      this._cache.set(key, cachedData);
    }
    return cachedData.subscribe(listener);
  }
}

const fetchCache = new FetchCache();
export default fetchCache;
