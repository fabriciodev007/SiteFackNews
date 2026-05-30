
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
                <Link to="/" className="text-2xl font-bold">Papo&Saúde</Link>

                <button
                    type="button"
                    className="md:hidden rounded-md border border-white/20 p-2 text-white hover:bg-white/10"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                >
                    <span className="block h-0.5 w-6 bg-white"></span>
                    <span className="mt-1 block h-0.5 w-6 bg-white"></span>
                    <span className="mt-1 block h-0.5 w-6 bg-white"></span>
                </button>

                <nav className={`absolute inset-x-0 top-full z-20 bg-gray-800 border-t border-white/10 md:static md:border-0 md:bg-transparent ${menuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col gap-3 p-4 md:flex-row md:p-0 md:items-center md:gap-6">
                        <li>
                            <Link to="/" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/sobre" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;