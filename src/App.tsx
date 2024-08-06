import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '@query-client';
import { RouterApp } from "@routes";
import { useTheme } from '@state';
import { Toast } from '@components';
import { LayoutMain } from '@components';

export const App = () => {
  const { isLight } = useTheme();
  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <main className={isLight ? 'light text-foreground bg-background' : 'dark text-foreground bg-background'}>
          <LayoutMain>
            <RouterApp />
          </LayoutMain>
        </main>
        <Toast />
      </NextUIProvider>
    </QueryClientProvider>
  )
}