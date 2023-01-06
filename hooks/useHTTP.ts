import { useState, useEffect, useRef, useCallback } from 'react';

type UseHTTPOptions = {
  initialRequest?: {
    url: string;
    options?: RequestInit;
  };
};

const useHTTP = (useHTTPOptions?: UseHTTPOptions) => {
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const abortControllersRef = useRef<Map<string, AbortController>>(new Map());

  const sendRequest = useCallback(
    async (url: string, options: RequestInit = {}) => {
      setIsLoading(true);
      const abortController = new AbortController();
      const signal = abortController.signal;
      abortControllersRef.current.set(url, abortController);
      try {
        const res = await fetch(url, {
          ...options,
          signal: signal
        });
        abortControllersRef.current.delete(url);
        setResponse(res);
        setIsLoading(false);
      } catch (error) {
        setError("Couldn't process your request, please try again later.");
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!useHTTPOptions?.initialRequest) {
      return;
    }
    sendRequest(
      useHTTPOptions.initialRequest.url,
      useHTTPOptions.initialRequest.options
    );
  }, [useHTTPOptions, sendRequest]);

  useEffect(() => {
    return () => {
      abortControllersRef.current.forEach((abortController) => {
        abortController.abort();
      });
    };
  }, []);

  return { response, error, isLoading, sendRequest };
};

export default useHTTP;
