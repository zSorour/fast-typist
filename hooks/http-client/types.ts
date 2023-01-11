export type CacheKey = string;

export type UseFetchParams<TFetchFnData = unknown> = {
  cacheKey: CacheKey;
  fetchFn: FetchFunction<TFetchFnData>;
} & UseFetchOptions;

export type UseFetchOptions<TInitialData = unknown> = {
  initialData?: TInitialData;
  immediate?: boolean;
  immediateRefetch?: boolean;
};

export type FetchFunction<TFetchFnData> = (
  ctx: FetchFunctionContext
) => Promise<TFetchFnData> | TFetchFnData;

export type FetchFunctionContext = {
  cacheKey: CacheKey;
  signal?: AbortSignal;
};

export type ListenerFunction<TData> = (data: TData) => void;
