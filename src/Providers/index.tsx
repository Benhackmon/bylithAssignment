import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
    </QueryClientProvider>
);

export default Providers;