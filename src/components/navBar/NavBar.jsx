import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Link } from "react-router-dom"
import alchemyBadger from '../../assets/TassoAlchimista.png'

export const NavBar = () => {
    return (
        <>
            <header className="bg-darkTeal py-6 ">
                <div className=" flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link to={'/'}>
                    <img alt="Alchemyst Badger" src={alchemyBadger} width={86} height={86} className="rounded-lg" />
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-white transition hover:text-gray-300/75 font-semibold text-xl" to={"/nftsale"}> NFT Sale </Link>
                                </li>

                                <li>
                                    <Link className="text-white transition hover:text-gray-300/75 font-semibold text-xl" to={"/tokenpresale"} > Token Pre-sale </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <ConnectButton />
                            </div>
                            <button
                                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
