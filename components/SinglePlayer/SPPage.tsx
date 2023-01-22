import PageWrapper from 'components/UI/PageWrapper';
import ConnectionStatus from 'components/shared/ConnectionStatus';
import useSocketIO from 'hooks/useSocketIO';
import { useEffect } from 'react';
import { useSPGameStore } from 'store/sp-game-store';
import SPNextWordTimer from './SPNextWordTimer';
import SPGameScores from './SPGameScores';
import GameplayContainer from 'components/shared/GameplayContainer';
import SPWords from './SPWords';
import SPWordInput from './SPWordInput';
import SPGameSettings from './SPGameSettings';
import { useAuthStore } from 'store/authentication';
import refreshAccessToken from 'utils/refreshAccessToken';
import { useRouter } from 'next/router';

const SinglePlayerPage = () => {
  const token = useAuthStore((state) => state.accessToken)!;
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const router = useRouter();

  const { socket, connectionState, error } = useSocketIO(
    'http://localhost:5000/sp-game',
    token
  );

  const setSocket = useSPGameStore((state) => state.setSocket);
  const registerEvents = useSPGameStore((state) => state.registerEvents);

  useEffect(() => {
    if (socket) {
      setSocket(socket);
      registerEvents();
    }
    if (error) {
      if (error.message === 'Token Expired') {
        refreshAccessToken()
          .then((newToken: string) => {
            setAccessToken(newToken);
          })
          .catch(() => {
            router.push('/login');
          });
      }
    }
  }, [setSocket, setAccessToken, registerEvents, socket, error, router]);

  return (
    <PageWrapper>
      <div className="flex justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-2 md:w-[50%] 2xl:w-[35%]">
        <ConnectionStatus {...connectionState} />
      </div>
      <div className="flex flex-col justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-0 md:aspect-square md:w-[50%] 2xl:w-[35%]">
        <SPNextWordTimer />
        <SPGameScores />
        <GameplayContainer>
          <SPWords />
          <SPWordInput />
        </GameplayContainer>
        <SPGameSettings />
      </div>
    </PageWrapper>
  );
};
export default SinglePlayerPage;
