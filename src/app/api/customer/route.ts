import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import prisma from '@/lib/prisma';

import { authOptions } from '@/lib/auth-options';

export const POST = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user)
    return NextResponse.json('O Usuário não está autenticado', { status: 401 });

  const { name, email, phone, adress, userId } = await request.json();
  if (!name || !email || !phone || !userId)
    return NextResponse.json('Preencha os dados corretamente', { status: 400 });

  try {
    await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        adress: adress ? adress : '',
        userId,
      },
    });

    return NextResponse.json({ status: 201 });
  } catch (err) {
    return NextResponse.json('Falha ao cadastrar cliente', { status: 500 });
  }
};
