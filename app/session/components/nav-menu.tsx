"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          src={session.user?.image || ""}
          alt="user image"
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
        <p> {session.user?.name}</p>
        <p> {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        <Link href="/session">
          <li
            className={pathname === "/session" ? ACTIVE_ROUTE : INACTIVE_ROUTE}
          >
            Home
          </li>
        </Link>
        <Link href="/session/protected">
          <li
            className={
              pathname === "/session/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Protected Route
          </li>
        </Link>
        <Link href="/session/serverAction">
          <li
            className={
              pathname === "/session/serverAction"
                ? ACTIVE_ROUTE
                : INACTIVE_ROUTE
            }
          >
            Server Action
          </li>
        </Link>
        <Link href="/session/apiFromClient">
          <li
            className={
              pathname === "/session/apiFromClient"
                ? ACTIVE_ROUTE
                : INACTIVE_ROUTE
            }
          >
            API From Client
          </li>
        </Link>
        <Link href="/session/apiFromServer">
          <li
            className={
              pathname === "/session/apiFromServer"
                ? ACTIVE_ROUTE
                : INACTIVE_ROUTE
            }
          >
            API From Server
          </li>
        </Link>
      </ul>
    </div>
  );
}
