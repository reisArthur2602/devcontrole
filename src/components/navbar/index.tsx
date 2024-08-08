import React from 'react';
import { Container } from '../container';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <Container classname="bg-neutral-950 px-6 py-3 rounded-lg my-9">
      <nav className="flex items-center gap-6">
        <Link href="/dashboard" className="text-neutral-50">
          Chamados
        </Link>
        <Link href="/dashboard/customers" className="text-neutral-50">
          Clientes
        </Link>
      </nav>
    </Container>
  );
};
