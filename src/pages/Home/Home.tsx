import { ProfileDetails } from './features/ProfileDetails/ProfileDetails';
import { Flex, Paper } from '@mantine/core';
import { AddApplication } from './features/AddAplication/AddAplication';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Applications } from './features/Applications/Applications';

export const Home = () => {
  const { loadUserDetails } = useAuth();
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  useEffect(() => {
    token ? loadUserDetails(token) : navigate('/login');
  }, [token]);

  return (
    <>
      <Flex justify='center' align={'center'} h='100vh'>
        <Paper
          radius='md'
          withBorder
          bg='var(--mantine-color-body)'
          w='90%'
          h='85%'
        >
          <Flex
            direction={'row'}
            align={'center'}
            justify={'space-between'}
            pr='3rem'
          >
            <Flex
              align={'center'}
              direction={'column'}
              h='85vh'
              pl='3rem'
              justify={'space-around'}
            >
              <ProfileDetails />
              <AddApplication />
            </Flex>
            <Applications />
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};
