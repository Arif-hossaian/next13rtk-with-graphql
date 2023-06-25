import { Providers } from '@/components/Providers';
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
		<Providers>{children}</Providers>
		</ReduxProvider>
      </body>
    </html>
  );
}
