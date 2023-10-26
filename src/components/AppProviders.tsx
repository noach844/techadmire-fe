import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
interface IProps {
  children: JSX.Element;
}
import { store } from '../redux/store';
const queryClient = new QueryClient();

export const AppProviders = ({ children }: IProps) => {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </MantineProvider>
  );
};
