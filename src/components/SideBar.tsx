/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';

const mainNavigation = [
  { name: 'Kanban Board', icon: HomeIcon, href: '/app/board', current: true },
  { name: 'Settings', icon: UsersIcon, href: '/app/settings', count: 3, current: false },

]
const otherNavigation = [
  { name: "Projects", icon: FolderIcon, href: "#", count: 4, current: false },
  { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
  { name: "Documents", icon: InboxIcon, href: "#", current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", count: 12, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-zinc-800/50">
			{/* Loga */}
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          RickLantis
        </div>

				{/* Navigation */}
        <nav className="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar">
          {mainNavigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}

					<Divider />

          {otherNavigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
      </div>

			{/* Nav Footer Section */}
      <div className="flex-shrink-0 flex p-4">
        <a href="#" className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Tom Cook</p>
              <p className="text-xs font-medium text-zinc-300 group-hover:text-zinc-200">View profile</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

/**
 * Navigation Item for the sidebar
 * @param item Data for the navItem
 */
function NavItem({item}: ComponentProps<"a"> & {item: typeof mainNavigation[0]}) {
	const router = useRouter()
	// const isActive = router.asPath.split("/").includes(item.href.split("/")[-1])

	return (
		<Link href={item.href}>
			<a
				className={classNames(
					item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
					'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
				)}
			>
				<item.icon
					className={classNames(
						item.current ? 'text-zinc-300' : 'text-zinc-400 group-hover:text-zinc-300',
						'mr-3 flex-shrink-0 h-4 w-4'
					)}
					aria-hidden="true"
				/>
				<span className="flex-1">{item.name}</span>
				{item.count ? (
					<span
						className={classNames(
							item.current ? 'bg-zinc-800' : 'bg-zinc-900 group-hover:bg-zinc-800',
							'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
						)}
					>
						{item.count}
					</span>
				) : null}
			</a>
		</Link>
	)
}

function Divider({children, ...props}: ComponentProps<"div">) {
  return (
    <div className="relative py-3">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-300/50" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-zinc-500">
					{children}
				</span>
      </div>
    </div>
  );
}
