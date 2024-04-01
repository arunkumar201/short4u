'use server';

import { sleep } from '@/utils';
import { unstable_cache } from 'next/cache';

interface IUser {
  name: string;
  email: string;
}
async function getUser(userId: string): Promise<IUser> {
  await sleep(20);

  return {
    name: `Arun -${userId}`,
    email: '9gqFP@example.com',
  };
}
export const getCachedUser = async (userId: string): Promise<IUser | null> => {
  return await unstable_cache(
    async (): Promise<IUser | null> => {
      try {
        const user = await getUser(userId);
        return user;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [userId],
    {
      revalidate: 60 * 60 * 24 * 7, // 7 days
      tags: [`user/${userId}`],
    },
  )();
};
