import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      issuer: process.env.ISSUER,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    }),
  ],
};
