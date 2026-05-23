

function Header() {
    return (
        <header className="flex items-center justify-around p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">FakeNews</h1>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/sobre" className="hover:underline">Sobre</a></li>
               <li><a href="/contato" className="hover:underline">Contato</a></li>
            </ul>
        </header>
    )
}   
export default Header;