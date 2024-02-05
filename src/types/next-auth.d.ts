import { UserRole } from '@prisma/client';
import NextAuth, { DefaultSession } from 'next-auth';
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
};
declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
