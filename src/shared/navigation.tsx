"use client";

import { cache, use } from "react";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
} from "../shared/buttons.component";
import { TAuth } from "@/app/profile/page";

const getUsers = cache(() => fetch("/api/session").then((res) => res.json()));

const Navigation = () => {
  const auth = use<TAuth>(getUsers());

  return (
    <div>
      {!auth.authenticated && (
        <div>
          <LoginButton />
        </div>
      )}

      {auth.authenticated && (
        <>
          <div>
            <LogoutButton />
          </div>
          <div>
            <ProfileButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
