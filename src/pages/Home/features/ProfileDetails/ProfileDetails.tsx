import { Avatar, Box, Button, Flex, Paper, Text } from '@mantine/core';
import ProfilePic from '../../../../assets/profile.jpg';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../../hooks/useAuth';

export const ProfileDetails = () => {
  const user = useSelector((state) => state.user.value);
  const { signout } = useAuth();

  return (
    <Paper
      radius='md'
      withBorder
      p='lg'
      bg='var(--mantine-color-body)'
      w='20rem'
    >
      <Flex direction={'column'} align={'center'}>
        {user && (
          <>
            <Avatar src={ProfilePic} size={120} radius={120} mx='auto' />
            <Text ta='center' fz='lg' fw={500} mt='md'>
              {user.firstname} {user.lastname}
            </Text>
            <Text ta='center' c='dimmed' fz='sm'>
              {`@${user.username}`}
            </Text>

            <Button variant='' mt='md' w='40%' onClick={signout}>
              Logout
            </Button>
          </>
        )}
      </Flex>
    </Paper>
  );
};
