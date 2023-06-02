"use client";

import Image from "next/image";
import { cache, use } from "react";

export type TAuth = {
  authenticated: boolean;
  session: {
    user: {
      image: string;
      name: string;
      email: string;
    };
  };
};

const getUsers = cache(() => fetch("/api/session").then((res) => res.json()));

export default function Profile() {
  const auth = use<TAuth>(getUsers());

  if (!auth.authenticated) {
    return <div>You are not authenticated.</div>;
  }

  const {
    session: { user },
  } = auth;

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div>
        <Image src={user.image} alt={user.name} width={50} height={50} />
      </div>
      <div>
        <strong>Username</strong>: {user.name}
      </div>
      <div>
        <strong>Email</strong>: {user.email}
      </div>
    </main>
  );
}
