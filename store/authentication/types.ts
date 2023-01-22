type AuthStore = {
  username: string | null;
  accessToken: string | null;
  isModalOpen: boolean;
  setAccessToken: (accessToken: string) => void;
  isLoggedIn: () => boolean;
  setIsModalOpen: (value: boolean) => void;
  login: (username: string, accessToken: string) => void;
};

export default AuthStore;
