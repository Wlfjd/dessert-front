import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';

const CustomQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { openToast } = useToast();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.error(error);

        const message = query.meta?.errorMessage;
        if (!message) return;

        openToast(
          <ToastPop>
            <div>{message}</div>
          </ToastPop>
        );
      }
    })
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
