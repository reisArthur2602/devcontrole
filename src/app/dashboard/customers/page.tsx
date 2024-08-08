import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Customers = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) redirect('/');
  return <div>Customers</div>;
};

export default Customers;
