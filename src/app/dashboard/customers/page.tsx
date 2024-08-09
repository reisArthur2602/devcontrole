import { Container } from '@/components/container';
import { authOptions } from '@/lib/auth-options';


import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const Customers = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) redirect('/');

  return (
    <Container classname="flex flex-col gap-9">
      <div className="w-full flex items-center justify-between">
        <h1>Meus Clientes</h1>
        <Link
          href="/dashboard/customers/new"
          className="px-5 py-2 rounded-lg bg-indigo-600 text-center text-neutral-50"
        >
          Cadastrar
        </Link>
      </div>
      Customers
    </Container>
  );
};

export default Customers;
