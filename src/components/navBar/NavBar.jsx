import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";
import alchemyBadger from "../../assets/TassoAlchimista.png";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-darkTeal py-6">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Contenitore sinistro (Logo + Link Navigazione) */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link to={"/"}>
                        <img
                            alt="Alchemyst Badger"
                            src={alchemyBadger}
                            width={86}
                            height={86}
                            className="rounded-lg"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 text-sm">
                        <Link
                            className="text-white transition hover:text-gray-300/75 font-semibold text-xl"
                            to={"/nftsale"}
                        >
                            NFT Sale
                        </Link>
                        <Link
                            className="text-white transition hover:text-gray-300/75 font-semibold text-xl"
                            to={"/tokenpresale"}
                        >
                            Token Pre-sale
                        </Link>
                    </nav>
                </div>

                {/* Contenitore destro (Connect Wallet + Mobile Menu) */}
                <div className="flex items-center gap-4">
                    <ConnectButton />
                    <button
                        className="md:hidden block p-2.5 text-gray-300 transition hover:text-gray-100 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (Collapsible) */}
            {isMenuOpen && (
                <div className="md:hidden bg-darkTeal text-white p-4 space-y-4">
                    <Link
                        className="block text-lg font-semibold transition hover:text-gray-300"
                        to={"/nftsale"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        NFT Sale
                    </Link>
                    <Link
                        className="block text-lg font-semibold transition hover:text-gray-300"
                        to={"/tokenpresale"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Token Pre-sale
                    </Link>
                </div>
            )}
        </header>
    );
};
