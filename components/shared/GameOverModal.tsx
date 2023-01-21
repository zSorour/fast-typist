import Backdrop from '../UI/Backdrop';
import ModalBody from '../UI/Modal/ModalBody';
import ModalHeader from '../UI/Modal/ModalHeader';
import CryingEmoji from 'public/crying-emoji.png';
import Image from 'next/image';
import ModalWrapper from '../UI/Modal/ModalWrapper';

type Props = {
  gameStatus: 'idle' | 'playing' | 'game-over';
  onClose: () => void;
  score: number;
};

const GameOverModal = (props: Props) => {
  if (props.gameStatus !== 'game-over') {
    return <></>;
  }

  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <ModalHeader onClose={props.onClose} />
        <ModalBody>
          <h3 className="font-bold text-2xl">Game Score: {props.score}</h3>
          <Image className="w-[60%]" src={CryingEmoji} alt="Sad Face" />
          <h3 className="font-bold text-xl">Better luck next time!</h3>
        </ModalBody>
      </ModalWrapper>
    </>
  );
};
export default GameOverModal;
