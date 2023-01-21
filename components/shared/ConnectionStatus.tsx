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

type Errored = {
  isLoading: false;
  isConnected: false;
  error: Error;
};

type Props = Disconnected | Loading | Connected | Errored;

const ConnectionStatus = (props: Props) => {
  let connectionStatus: 'Loading...' | 'Connected' | 'Disconnected';
  let connectionIconColor: 'bg-green-600' | 'bg-red-600' | 'bg-yellow-600';

  if (props.isLoading) {
    connectionStatus = 'Loading...';
    connectionIconColor = 'bg-yellow-600';
  } else if (props.isConnected) {
    connectionStatus = 'Connected';
    connectionIconColor = 'bg-green-600';
  } else {
    connectionStatus = 'Disconnected';
    connectionIconColor = 'bg-red-600';
  }

  return (
    <span className="flex justify-center items-center gap-2">
      <span className={`rounded-full p-[5px] ${connectionIconColor}`}></span>
      <span className="font-bold">{connectionStatus}</span>
    </span>
  );
};
export default ConnectionStatus;
