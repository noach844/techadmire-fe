import { Center, Flex, Loader, Paper, Space } from '@mantine/core';
import { Application, IApplication } from './Application/Application';
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { getUserApplications } from '../../../../api/applicationsAPI';
import { useSelector } from 'react-redux';

export const Applications = () => {
  const token = useSelector((state) => state.token.value);

  const fetchApplications = async () => getUserApplications(token);

  const { isLoading, isError, data } = useQuery<unknown, Error, [IApplication]>(
    {
      queryKey: ['applications'],
      queryFn: fetchApplications,
    }
  );

  return (
    <Paper
      radius='md'
      withBorder
      p='lg'
      bg='var(--mantine-color-body)'
      w='75%'
      h='80vh'
      style={{ overflow: 'auto' }}
    >
      <Center>
        <h1>My Applications</h1>
      </Center>
      <Flex
        w='100%'
        h='100%'
        direction={'row'}
        wrap={'wrap'}
        justify={'space-around'}
        align={'start'}
      >
        {isLoading ? (
          <Loader color='blue' />
        ) : (
          data?.map((app: IApplication) => {
            return (
              <Application
                university={app.university}
                course={app.course}
                fullname={app.fullname}
              />
            );
          })
        )}
      </Flex>
    </Paper>
  );
};
