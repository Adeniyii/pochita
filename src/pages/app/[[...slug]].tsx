import { useRouter } from 'next/router';
import React from 'react'
import App from '../../components/App';
import Board from '../../components/Board';
import Settings from '../../components/Settings';
import SideBar from '../../components/SideBar';

const Home = () => {
	const router = useRouter()

	return (
    <section className="flex min-h-screen text-zinc-100">
      <nav className="flex h-screen w-[100px] border-r-2 border-zinc-400 p-4 ">
        nav
      </nav>
      <aside className="h-screen w-[300px]">
        <SideBar />
      </aside>
      <main className="h-screen flex-1 p-10">
        {!router.query?.slug ? (
          <App />
        ) : (router.query?.slug as string[])?.includes("settings") ? (
          <Settings />
        ) : (router.query?.slug as string[])?.includes("board") ? (
          <Board />
        ) : null}
      </main>
    </section>
  );
}

Home.isAuth = true

export default Home;
