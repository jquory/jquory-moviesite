import Image from 'next/image'
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'

import { getSession, signIn, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'


const Header = () => {
    const [session] = useSession()
    const router = useRouter()
    return (
        <header className="sticky bg-[#040714] h-[72px] flex top-0 items-center z-[1000] px-10 md:px-12">
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer" onClick={() => router.push("/")} />
            {session && (

                <div className="hidden ml-10 md:flex items-center space-x-6">
                    <a className="header-link group">
                        <HomeIcon className="h-4" />
                        <span className="span">Home</span>
                    </a>
                    <a className="header-link group">
                        <SearchIcon className="h-4" />
                        <span className="span">Search</span>
                    </a>
                    <a className="header-link group">
                        <PlusIcon className="h-4" />
                        <span className="span">WatchList</span>
                    </a>
                    <a className="header-link group">
                        <StarIcon className="h-4" />
                        <span className="span">Original</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/movie-icon.svg" alt="movie" className="h-5" />
                        <span className="span">Movies</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/series-icon.svg" alt="series" className="h-5" />
                        <span className="span">Series</span>
                    </a>

                </div>
            )}
            {!session ? (
                <button className="ml-auto uppercase border px-4 py-1.5 font-semibold hover:bg-white hover:text-black transition duration-300 rounded tracking-wide" onClick={signIn}>Login</button>

            ) : (
                <div className="flex items-center ml-auto object-cover cursor-pointer" onClick={signOut}>
                    <p>Welcome to jQuory site, {session.user.name}</p>
                    <img src={session.user.image} alt="gambar" className="rounded-full h-12 w-12 ml-2" />
                </div>
            )}
        </header>
    )
}

export default Header
