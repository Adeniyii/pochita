import React from 'react'

const Home = () => {
	return (
		<section className='min-h-screen w-screen flex'>
			<nav className='h-screen border-r-4 border-zinc-400 p-4 w-[100px] flex '>nav</nav>
			<aside className= "h-screen bg-zinc-800 w-[300px] p-4">aside</aside>
			<main className='h-screen ring-zinc-700 flex-1'>main</main>
		</section>
	)
}

Home.isAuth = true

export default Home;
