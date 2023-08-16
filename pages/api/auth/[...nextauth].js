import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

import { server } from "../../../config";

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        firstName: {
          label: "First Name",
          type: "text",
          placeholder: "Enter your first name",
        },
        lastName: {
          label: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
        },
        userType: {
          label: "User Type",
          type: "text",
          placeholder: "userType",
        },
        remember: {
          label: "Remember",
          type: "boolean",
          placeholder: "Remember",
        },
        record_id: {
          label: "Record Id",
          type: "text",
          placeholder: "Record Id",
        },
      },
      async authorize(credentials, req) {
        return {
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          userType: credentials.userType,
          remember: credentials.remember,
          record_id: credentials.record_id,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // // Seconds - Throttle how frequently to write to database to extend a session.
    // // Use it to limit write operations. Set to 0 to always update the database.
    // // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async redirect(url, baseUrl) {
      // console.log("REDIRECT", url, baseUrl);
      return baseUrl;
    },
    async session(session, token) {
      // if (token) {

      //   session.user.record_id = token.record_id;
      //   session.remember = token.remember;
      // }

      if (token) {
        session.exp = token.expire;
        session.user.userType = token.userType;
        session.user.record_id = token.record_id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.remember = token.remember;
      }
      // console.log("SESSION", session, "TOKEN", token);

      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // console.log(
      //   "jwt token",
      //   token,
      //   "jwt user",
      //   user,
      //   "jwt account",
      //   account,
      //   "jwt profile",
      //   profile,
      //   "jwt isNewUser",
      //   isNewUser
      // );
      // Initial sign in
      // if (account && user) {
      //   token.remember = user.remember;
      //   token.record_id = parseInt(user.record_id);
      // }

      // Initial sign in
      if (account && user) {
        if (user.remember == "false" && account.type == "credentials") {
          token.expire = Date.now() + 1 * 24 * 60 * 60 * 1000;
          token.userType = user.userType;
          token.remember = false;
          token.firstName = user.firstName;
          token.lastName = user.lastName;
          token.record_id = parseInt(user.record_id);
        } else {
          token.userType = user.userType;
          token.record_id = parseInt(user.record_id);
		  token.firstName = user.firstName;
          token.lastName = user.lastName;
        }
      }
      return { ...token, exp: token.expire ? token.expire : token.exp };
    },
  },
});
