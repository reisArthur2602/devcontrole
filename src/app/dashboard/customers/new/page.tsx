import { Container } from '@/components/container';
import React from 'react';
import { CustomerForm } from './session/customer-form';
import Link from 'next/link';
import { X } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth-options';

const NewCustomer = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) redirect('/');

  return (
    <Container classname="flex flex-col gap-6">
      <div className="w-full flex items-center justify-between">
        <h1>Novo Cliente</h1>
        <Link href="/dashboard/customers">
          <X size={32} />
        </Link>
      </div>

      <CustomerForm userId={session.user.id} />
    </Container>
  );
};

export default NewCustomer;
