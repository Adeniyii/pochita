import Skeleton from '../components/Skeleton';
import { useRequireAuth } from '../hooks/useRequireAuth'
import Wrapper from '../layouts/Wrapper'
import isServer from '../utils/isServer';
import Link from "next/link";
import { signOut } from 'next-auth/react';

function DashBoard() {
  return (
    <Wrapper>
      <div>PanDaaaash!</div>
      <button
        className="mt-3 rounded bg-purple-700 px-4 py-2"
        onClick={() => signOut({ redirect: false, callbackUrl: "/signin" })}
      >
        sign out
      </button>
      <Link href="/" passHref>
        <a className="text-blue-500">Home</a>
      </Link>
      <Link href="/signin" passHref>
        <a className="text-blue-500">sign in</a>
      </Link>
    </Wrapper>
  );
}

DashBoard.isAuth = true

export default DashBoard
