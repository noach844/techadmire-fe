import { Button } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1> Login </h1>
      <Button
        onClick={async () => {
          await signin('test2', 'noach844');
          navigate('/');
        }}
      >
        signin
      </Button>
    </>
  );
};
