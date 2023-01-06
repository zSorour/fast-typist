import Backdrop from 'components/UI/Backdrop';
import ModalBody from 'components/UI/Modal/ModalBody';
import ModalHeader from 'components/UI/Modal/ModalHeader';
import ModalWrapper from 'components/UI/Modal/ModalWrapper';
import { useAuthStore } from 'store/authentication';
import LoginForm from './LoginForm';

const LoginModal = () => {
  const setIsModalOpen = useAuthStore((selector) => selector.setIsModalOpen);

  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <ModalHeader onClose={() => setIsModalOpen(false)} />
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </ModalWrapper>
    </>
  );
};
export default LoginModal;
