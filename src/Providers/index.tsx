import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
    children: ReactNode
}
const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
);

export default Providers;