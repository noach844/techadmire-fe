import { Button } from '@mantine/core';
import './App.css';
import { useAuth } from './hooks/useAuth';
function App() {
  const { token, signin, signout } = useAuth();
  return (
    <>
      <h1>{token}</h1>
      <h1>{token ? 'Auth' : 'not Auth'}</h1>
      <Button
        onClick={() => {
          signin('test2', 'noach844');
        }}
      >
        sign
      </Button>
      <Button onClick={signout}>signout</Button>
    </>
  );
}

export default App;
