import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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