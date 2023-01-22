const refreshAccessToken = async () => {
  const response = await fetch('http://localhost:5000/auth/refresh', {
    method: 'POST',
    credentials: 'include'
  });
  if (!response.ok) {
    throw new Error('Unauthorized, please login');
  }
  const { accessToken } = await response.json();
  return accessToken;
};

export default refreshAccessToken;
