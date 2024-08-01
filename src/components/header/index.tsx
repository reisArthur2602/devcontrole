import { LogOut , UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="w-full px-2 py-6 items-center justify-center bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-extrabold uppercase hover:tracking-widest duration-300">
            <span className=" text-indigo-700">Dev</span>
            Controle
          </h1>
        </Link>

        <div className="flex gap-4">

          <Link href="/dashboard">
            <UserCircle2 size={24} />
          </Link>

          <button>
            <LogOut size={24}/>
          </button>
        </div>
      </div>
    </header>
  );
};