import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/userModel"
import { Provider } from "next-auth/providers"

export const authOptions:any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        id:"credentials",
        type:"credentials",
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          await dbConnect()
          if (credentials?.password?.length && credentials?.username?.length) {
            const existingUser = await User.findOne({username:credentials.username, password:credentials.password});
            if (existingUser) {
                return existingUser
            } else return null
          } else {
            return null
          }
        }
      })
    ] as Provider[],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        encryption: true
    },
    pages :{
      signIn: '/login',
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.username= user.username;
          token.purchasedCourses=user.purchasedCourses
          token.id=user._id
        }
  
        return token;
      },
      session: ({ session, token }) => {
        if (token) {
          session.user.username = token.username;
          session.user.purchasedCourses= token.purchasedCourses;
          session.user.id=token.id
        }
        return session;
      },
    },
  
}

export default NextAuth(authOptions)