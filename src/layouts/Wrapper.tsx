import React, { ReactNode } from 'react'

const Wrapper = ({children}: {children: ReactNode}) => {
	return (
		<main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
			{children}
		</main>
	)
}

export default Wrapper
