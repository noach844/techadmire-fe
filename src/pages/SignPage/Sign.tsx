import { Button, Center, Title, Text, Flex, Space } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import classes from './Sign.module.css';
import { SignIn } from './features/SignIn';
import StudentPic from '../../assets/student.png';
import { useToggle } from '@mantine/hooks';
import { SignUp } from './features/Signup';

export const Sign = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [isMember, toggle] = useToggle([true, false]);

  return (
    <Flex
      justify={'start'}
      align={'start'}
      h='100vh'
      p={'7rem'}
      direction={'row'}
      style={{ overflow: 'hidden' }}
    >
      <Flex direction={'column'}>
        <h1 className={classes.title}>
          Welcome To{' '}
          <Text
            component='span'
            variant='gradient'
            gradient={{ from: 'blue', to: 'cyan' }}
            inherit
          >
            Tech Admire's
          </Text>{' '}
          Application System For Students!
        </h1>
        <Space h='3rem' />
        {isMember ? (
          <SignIn toggleIsMember={toggle} />
        ) : (
          <SignUp toggleIsMember={toggle} />
        )}
      </Flex>
      <img src={StudentPic} className={classes.studentImage} />
    </Flex>
  );
};
