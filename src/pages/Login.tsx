import { useState } from 'react';
import LoginInput from '../components/LoginInput';
import InstagramWordmark from '../assets/Instagram-wordmark.svg';
import { useAppContext } from '../context';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const { login } = useAppContext();

  const handleLogin = async () => {
    try {
      setLoginError('');
      await login(username, password);
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='border bg-white p-8 w-96'>
        <div className='flex justify-center mb-6'>
          <img
            src={InstagramWordmark}
            alt='instagram wordmark'
            className='h-10'
          />
        </div>
        <div className='flex flex-col space-y-2 mb-4'>
          {loginError ? (
            <p className='text-sm text-red-500 font-medium -mt-4'>
              * Error: {loginError}
            </p>
          ) : null}
          <LoginInput
            label='Phone number, username, or email'
            value={username}
            onChange={setUsername}
          />
          <LoginInput
            label='Password'
            type='password'
            value={password}
            onChange={setPassword}
          />
        </div>
        <button
          disabled={!username || !password}
          onClick={handleLogin}
          className='text-sm font-bold text-white bg-blue-400 w-full p-1.5 rounded transition-all hover:bg-blue-500 active:bg-blue-600 disabled:bg-blue-200'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
