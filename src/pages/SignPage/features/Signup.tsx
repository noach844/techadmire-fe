import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Space,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight } from '@tabler/icons-react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const SignUp = ({ toggleIsMember }) => {
  const { signin, signup } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
    },
  });

  return (
    <>
      <h1>Sign Up</h1>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            await signup(values);
            await signin(values.username, values.password);
            navigate('/');
          } catch (err) {
            alert('error!');
          }
        })}
        style={{ width: '50%' }}
      >
        <Flex
          direction={'column'}
          justify={'space-between'}
          h='24rem'
          align={'end'}
        >
          <TextInput
            w={'100%'}
            required
            label='Username:'
            placeholder='Your User Name here...'
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue('username', event.currentTarget.value)
            }
          />
          <TextInput
            w={'100%'}
            required
            label='Firstname:'
            placeholder='Your First Name here...'
            value={form.values.firstname}
            onChange={(event) =>
              form.setFieldValue('firstname', event.currentTarget.value)
            }
          />
          <TextInput
            w={'100%'}
            required
            label='Lastname:'
            placeholder='Your Last Name here...'
            value={form.values.lastname}
            onChange={(event) =>
              form.setFieldValue('lastname', event.currentTarget.value)
            }
          />
          <PasswordInput
            w='100%'
            required
            label='Password:'
            placeholder='Your User Name here...'
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
          />
          <a>
            Already a member ?{' '}
            <a
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={toggleIsMember}
            >
              click here
            </a>
          </a>
          <Button
            type='submit'
            w='25%'
            rightSection={<IconArrowRight size={14} />}
            gradient={{ from: 'blue', to: 'cyan' }}
            variant='gradient'
          >
            Sign Up
          </Button>
        </Flex>
      </form>
    </>
  );
};
