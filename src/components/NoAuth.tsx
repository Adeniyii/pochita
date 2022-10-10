import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ComponentProps } from 'react'

const NoAuth = ({ children }: ComponentProps<"div">) => {
	const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "authenticated") {
    console.log("wuuuut")
    router.push(router.query?.next ? (router.query?.next as string) : "/");
  }

  if (status === "unauthenticated") {
    return <div>{children}</div>;
  }
}

export default NoAuth
