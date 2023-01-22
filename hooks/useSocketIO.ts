import { useEffect, useState, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

type Disconnected = {
  isLoading: false;
  isConnected: false;
};

type Loading = {
  isLoading: true;
  isConnected: false;
};

type Connected = {
  isLoading: false;
  isConnected: true;
};

type ConnectionState = Disconnected | Loading | Connected;

const useSocketIO = <
  StoCEvents extends EventSourceEventMap,
  CtoSEvents extends EventSourceEventMap
>(
  url: string,
  token: string
) => {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    isLoading: false,
    isConnected: false
  });
  const [error, setError] = useState<Error>();

  const clearError = useCallback(() => {
    setError(undefined);
  }, []);

  const socketRef = useRef<Socket<StoCEvents, CtoSEvents>>();

  useEffect(() => {
    setConnectionState({ isLoading: true, isConnected: false });
    const socket: Socket<StoCEvents, CtoSEvents> = io(url, {
      auth: {
        token: token
      },
      transports: ['websocket']
    });
    socketRef.current = socket;
    socketRef.current.on('connect', () => {
      setConnectionState({ isLoading: false, isConnected: true });
    });
    socketRef.current.on('disconnect', () => {
      setConnectionState({ isLoading: false, isConnected: false });
    });
    socketRef.current.on('connect_error', (error: Error) => {
      setConnectionState({
        isLoading: false,
        isConnected: false
      });
      setError(error);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, [url, token]);

  return {
    connectionState,
    error,
    clearError,
    socket: socketRef.current
  };
};

export default useSocketIO;
