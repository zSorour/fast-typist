import { useState, useEffect, useCallback } from 'react';
import { CacheKey, UseFetchParams } from './types';
import useCache from './useCache';

const abortControllers = new Map<CacheKey, AbortController>();

const useFetch = <TData>(useFetchParams: UseFetchParams<TData>) => {
  const [data, setData] = useState<TData | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cacheKey = useFetchParams.cacheKey;

  const { getChachedData, setCachedData } = useCache(cacheKey, setData);

  const refetch = useCallback(async () => {
    // abort previous request
    if (abortControllers.has(cacheKey)) {
      abortControllers.get(cacheKey)?.abort();
    }

    setIsLoading(true);
    // create abort controller
    const abortController = new AbortController();
    abortControllers.set(cacheKey, abortController);
    const signal = abortController.signal;

    // load data by calling useFetchParams.fetchFn
    try {
      const responseData = await useFetchParams.fetchFn({ signal, cacheKey });
      setCachedData(responseData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred'));
        console.log('Unknown error');
      }
    }
    abortControllers.delete(cacheKey);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey, setCachedData]);

  useEffect(() => {
    if (!useFetchParams.immediate) {
      return;
    }

    if (useFetchParams.immediate && useFetchParams.immediateRefetch) {
      refetch();
      return;
    }

    if (useFetchParams.immediate) {
      const cachedData = getChachedData();
      if (cachedData) {
        setData(cachedData);
      } else {
        refetch();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      abortControllers.get(useFetchParams.cacheKey)?.abort();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      abortControllers.delete(useFetchParams.cacheKey);
    };
  }, [useFetchParams.cacheKey]);

  return { data, error, isLoading, refetch };
};

export default useFetch;
