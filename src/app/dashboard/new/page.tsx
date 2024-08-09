import { Container } from '@/components/container';

import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react';
import { TicketForm } from './session/ticket-form';
import { X } from 'lucide-react';
import { authOptions } from '@/lib/auth-options';

const NewTicket = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) redirect('/');
  return (
    <Container classname="flex flex-col gap-6">
      <div className="w-full flex items-center justify-between">
        <h1>Novo Chamado</h1>
        <Link href="/dashboard">
          <X size={32} />
        </Link>
      </div>

      <TicketForm />
    </Container>
  );
};

export default NewTicket;
