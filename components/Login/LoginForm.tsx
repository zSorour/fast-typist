import FormError from 'components/UI/Form/FormError';
import TextInput from 'components/UI/Form/TextInput';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { useAuthStore } from 'store/authentication';

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const sendLoginRequest = async (formData: FieldValues) => {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.username,
        password: formData.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      login(data.username, data.accessToken);
      router.push('/play');
    } else {
      alert('error login failed');
    }
  };

  const loginSubmitHandler = async (formData: FieldValues) => {
    setIsLoading(true);
    await sendLoginRequest(formData);
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4"
      onSubmit={handleSubmit(loginSubmitHandler)}
    >
      <TextInput
        type="text"
        label="Username"
        id="username"
        {...register('username', { required: true })}
      />
      {formState.errors.username && (
        <FormError>Username must not be empty</FormError>
      )}
      <TextInput
        type="password"
        label="Password"
        id="password"
        {...register('password', { required: true })}
      />
      {formState.errors.password && (
        <FormError>Password must not be empty</FormError>
      )}
      <button
        className="font-bold bg-emerald-600 py-2 px-8 rounded-lg"
        disabled={isLoading}
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
