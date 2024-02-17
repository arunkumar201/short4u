'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import { LoginButton } from '@/components/custom-ui/login-button';
import NavBar from '@/components/navbar/NavBar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-muted-foreground'>Hello World from Home Page</h1>
      
    </main>
  );
}
