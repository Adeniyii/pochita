import { useSession } from "next-auth/react"
import Router from "next/router"
import { useEffect } from "react"

/**
 * Checks if a user is currently authenticated,
 * and redirects to signIn page if not.
 */
export function useRequireAuth(next: string, redirect = "/signin") {
	const sesh = useSession();

		useEffect(() => {
			if (sesh.status === "loading") return

      if (sesh.status === "unauthenticated" || !sesh.data?.user) {
        Router.push(`${redirect}?next=${next}`);
      }
	}, [sesh.status])

	return {data: sesh.data!, status: sesh.status || "loading"}
}
