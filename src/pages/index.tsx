import { trpc } from "../utils/trpc";
import { IconPhoto } from "@tabler/icons";
import Wrapper from "../layouts/Wrapper";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const secretMessage = trpc.useQuery(["auth.getSecretMessage"]);
  const {data} = useSession();

  return (
    <Wrapper>
      {!!data && <h1>{`Hello ${data?.user?.name}`}</h1>}
      <p>{secretMessage.data}</p>
      <IconPhoto size={50} strokeWidth={1} />
      <button
        className="mt-3 rounded bg-purple-700 px-4 py-2"
        onClick={() => signOut({ redirect: false, callbackUrl: "/signin" })}
      >
        sign out
      </button>
      <Link href="/signin" passHref>
        <a className="text-blue-500">sign in</a>
      </Link>
      <Link href="/dashboard" passHref>
        <a className="text-blue-500">dashboard</a>
      </Link>
      <Link href="/app" passHref>
        <a className="text-blue-500">app</a>
      </Link>
    </Wrapper>
  );
};

Home.isAuth = true

export default Home;
