import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Paper,
  Text,
  TextInput,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useSelector } from 'react-redux';
import { createApplication } from '../../../../api/applicationsAPI';
import { useQueryClient } from '@tanstack/react-query';

export const AddApplication = () => {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ['applications'] });
  };
  const form = useForm({
    initialValues: {
      fullname: 'omer noach',
      university: '',
      course: '',
    },
  });
  return (
    <Paper
      radius='md'
      withBorder
      bg='var(--mantine-color-body)'
      w='20rem'
      p='md'
      h='45vh'
    >
      {user && (
        <Flex direction='column'>
          <Center>
            <h2>Create Application</h2>
          </Center>
          <form
            onSubmit={form.onSubmit(async (values) => {
              await createApplication(token, { ...values, user_id: user.id });
              form.reset();
              handleRefetch();
            })}
          >
            <Flex
              direction={'column'}
              justify={'space-evenly'}
              align={'center'}
              h='35vh'
            >
              <TextInput
                w={'100%'}
                required
                disabled
                label='Full Name:'
                value={form.values.fullname}
                onChange={(event) =>
                  form.setFieldValue('fullName', event.currentTarget.value)
                }
              />
              <TextInput
                w={'100%'}
                required
                label='University:'
                value={form.values.university}
                onChange={(event) =>
                  form.setFieldValue('university', event.currentTarget.value)
                }
              />
              <TextInput
                w={'100%'}
                required
                label='Course:'
                value={form.values.course}
                onChange={(event) =>
                  form.setFieldValue('course', event.currentTarget.value)
                }
              />
              <Button
                type='submit'
                rightSection={<IconPlus size={14} stroke={3} />}
                w='30%'
              >
                Add
              </Button>
            </Flex>
          </form>
        </Flex>
      )}
    </Paper>
  );
};
