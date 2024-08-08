import { Container } from '@/components/container';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) redirect('/');

  return (
    <Container classname="flex flex-col gap-6">
      <div className="w-full flex items-center justify-between">
        <h1>Meus Chamados</h1>
        <Link
          href="/dashboard/new"
          className="px-5 py-2 rounded-lg bg-indigo-600 text-center text-neutral-50"
        >
          Cadastrar
        </Link>
      </div>
      Tickets
    </Container>
  );
};

export default Dashboard;
