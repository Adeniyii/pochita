import { signIn } from 'next-auth/react'
import React from 'react'
import Wrapper from '../layouts/Wrapper'
import Link from "next/link";
import { useRouter } from 'next/router';

const Signin = () => {
	const router = useRouter()

	const handleSignIn = async () => {
		signIn("github")
	}

	return (
    <Wrapper>
      <div>signin</div>
      <button
        className="mt-3 rounded bg-green-500 px-4 py-2"
        onClick={handleSignIn}
      >
        signin with github
      </button>
      <Link href="/" passHref>
        <a className="text-blue-500">Home</a>
      </Link>
      <Link href="/dashboard" passHref>
        <a className="text-blue-500">Dashboard</a>
      </Link>
      <Link href="/app" passHref>
        <a className="text-blue-500">app</a>
      </Link>
    </Wrapper>
  );
}

Signin.noAuth = true

export default Signin
