"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button
      style={{
        margin: 10,
        width: 100,
        textAlign: "center",
      }}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      style={{
        margin: 10,
        width: 100,
        textAlign: "center",
      }}
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return (
    <Link
      style={{
        margin: 10,
        width: 100,
        textAlign: "center",
        display: "block",
      }}
      href="/profile"
    >
      Profile
    </Link>
  );
};
