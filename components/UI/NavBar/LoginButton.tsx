import { useAuthStore } from 'store/authentication';

const LoginButton = () => {
  const setIsModalOpen = useAuthStore((selector) => selector.setIsModalOpen);

  return (
    <li>
      <button
        className="p-5 font-bold hover:text-emerald-500"
        onClick={() => setIsModalOpen(true)}
      >
        Login
      </button>
    </li>
  );
};
export default LoginButton;
