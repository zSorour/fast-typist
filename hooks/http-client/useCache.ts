import { useEffect, useCallback } from 'react';

import { ListenerFunction } from './types';
import fetchCache from './FetchCache';

const useCache = <TData>(
  key: string,
  stateMutator: ListenerFunction<TData>
) => {
  const getChachedData = useCallback(() => {
    return fetchCache.getCachedData(key) as TData | undefined;
  }, [key]);

  const setCachedData = useCallback(
    (data: TData) => {
      fetchCache.setCachedData(key, data);
    },
    [key]
  );

  useEffect(() => {
    // subscribe to cached data of key: key
    const unsubscribe = fetchCache.subscribe(key, stateMutator);
    // return cleanup function that unsubscribes
    return () => {
      unsubscribe();
      console.log('removed listener');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { getChachedData, setCachedData };
};

export default useCache;
