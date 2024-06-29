import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterApp } from "./routes";
import { NextUIProvider } from '@nextui-org/react'
import { client } from './assets/query-client';
import { useTheme } from './state';
// import { LayoutMain } from './components';

export const App = () => {
  const { isLight } = useTheme();

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <main className={isLight ? 'light text-foreground bg-background' : 'dark text-foreground bg-background'}>
        {/* <LayoutMain> */}
          <RouterApp />
        {/* </LayoutMain> */}
        {/* <Toast /> */}
        </main>
      </NextUIProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}