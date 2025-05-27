"use client"
import React from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image 
        src={'./logo.svg'}
        alt='finly'
        width={160}
        height={100}
      />

      <div className='flex items-center gap-4'>
        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <Link href="/sign-in">
            <Button>Login / Signup</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
