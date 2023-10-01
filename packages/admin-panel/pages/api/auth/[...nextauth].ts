import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../lib/dbConnect';
import Admin from '../../../models/adminModel';
import { Provider } from 'next-auth/providers';
import { z } from 'zod';

const userInputSchema = z.object({
  username: z.string().min(3).max(40),
  password: z.string().min(6).max(20),
});

type AdminType = z.infer<typeof userInputSchema>;

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      type: 'credentials',
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        await dbConnect();
        const parsedInput = userInputSchema.safeParse({
          username: credentials?.username,
          password: credentials?.password,
        });
        if (!parsedInput.success) {
          return null;
        }
        const existingUser = await Admin.findOne({
          username: parsedInput.data.username,
          password: parsedInput.data.password,
        });
        if (existingUser) {
          return existingUser;
        } else return null;
      },
    }),
  ] as Provider[],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    encryption: true,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username;
        token.id = user._id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.username = token.username;
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
