import { useSPGameStore } from 'store/single-player-game';
import Backdrop from '../UI/Backdrop';
import ModalBody from '../UI/Modal/ModalBody';
import ModalHeader from '../UI/Modal/ModalHeader';
import CryingEmoji from 'public/crying-emoji.png';
import Image from 'next/image';
import ModalWrapper from '../UI/Modal/ModalWrapper';
const GameOverModal = () => {
  const gameStatus = useSPGameStore((state) => state.gameStatus);
  const resetGame = useSPGameStore((state) => state.resetGame);

  if (gameStatus !== 'game-over') {
    return <></>;
  }

  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <ModalHeader onClose={resetGame} />
        <ModalBody>
          <h1 className="font-bold text-2xl">Game over</h1>
          <Image className="w-[60%]" src={CryingEmoji} alt="Sad Face" />
        </ModalBody>
      </ModalWrapper>
    </>
  );
};
export default GameOverModal;
