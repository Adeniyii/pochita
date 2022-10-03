import { signIn } from 'next-auth/react'
import Router from 'next/router'
import React from 'react'
import Wrapper from '../layouts/Wrapper'

const signin = () => {
	const handleSignIn = async () => {
		const result = await signIn("github")
		console.log("result: ", result);


		if (result?.ok){
			Router.replace('/');
		}
	}

	return (
		<Wrapper>
			<div>signin</div>
			<button
				className='bg-green-500'
			 	onClick={handleSignIn}
			>
				signin with github
			</button>
		</Wrapper>
	)
}

export default signin
