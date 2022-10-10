import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { ComponentProps } from 'react'

const AuthGuard = ({ children }: ComponentProps<"div">) => {
	const { status } = useSession()
  const router = useRouter()

	if (status === "loading") {
		return <div>Loading ...</div>
	}

	if (status === "unauthenticated") {
		router.push(`/signin?next=${router.asPath}`)
	}

	if (status == "authenticated") {
		return (
			<div>{children}</div>
		)
	}
}

export default AuthGuard
