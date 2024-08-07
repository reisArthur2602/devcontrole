'use client';
import { Lock, LogOut, UserCircle2 } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Container } from '../container';

export const Header = () => {
  const { status } = useSession();

  const onLogin = async () => {
    await signIn();
  };

  const onLogout = async () => {
    await signOut();
  };

  return (
    <header className="w-full px-2 py-6  bg-white shadow-sm shadow-slate-200">
      <Container classname="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-extrabold uppercase hover:tracking-widest duration-300">
            <span className=" text-indigo-700">Dev</span>
            Controle
          </h1>
        </Link>

        <div className="flex gap-6">
          {status === 'authenticated' && (
            <>
              <Link
                href="/dashboard"
                className="hover:text-indigo-500 duration-200"
              >
                <UserCircle2 size={28} />
              </Link>

              <button
                className="hover:text-indigo-500 duration-200"
                onClick={onLogout}
              >
                <LogOut size={28} />
              </button>
            </>
          )}
          {status === 'unauthenticated' && (
            <button
              className="hover:text-indigo-500 duration-200"
              onClick={onLogin}
            >
              <Lock size={28} />
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};
