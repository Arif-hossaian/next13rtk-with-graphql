
import { ApolloProviders } from '@/components/ApolloProviders';
import './globals.css';
import { ReduxProvider } from '@/redux/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider>
          <ApolloProviders>{children}</ApolloProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
