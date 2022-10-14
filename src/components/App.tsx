import { signOut } from 'next-auth/react'
import React from 'react'
import { trpc } from '../utils/trpc'
import EmptyState from './EmptyState'

const App = () => {
	const res = trpc.useQuery(["profile.info"], {refetchOnWindowFocus: false})
	const { data, isLoading } = res

	function Body() {
		if (isLoading) {
			return (
				<div>
					Loading ...
				</div>
			)
		}

		if (!data) {
			return (
				<div>
					No profile found
				</div>
			)
		}

		if (!data.projects.length && !data.joinedProjects.length) {
			return <EmptyState action={() => {}} />
		}

		return (
      <div>{(!isLoading && data?.userId) ?? <span>{data?.userId}</span>}</div>
    );
	}

	return (
    <div>
      {/* <h1>App</h1>
      <button
        className="mt-3 rounded bg-purple-700 px-4 py-2"
        onClick={() => signOut({ redirect: false, callbackUrl: "/signin" })}
      >
        sign out
      </button> */}
      <Body />
    </div>
  );
}

export default App
