import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Controle - O seu sistema de gerenciamento',
  description: 'Gerencie seus clientes e atendimentos de forma fácil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
