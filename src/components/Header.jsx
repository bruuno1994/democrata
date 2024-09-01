import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around m-auto p-1 border-b-2 border-gray-400 bg-gray-200">

        <img src="/logo.webp" class="h-20" alt="Democrata Logo" />

      <nav className="hidden font-serif sm:flex justify-between items-center gap-4 font-semibold">
        <Link to="/"> Home </Link>
        <Link to="/Sobre"> Quem somos </Link>
        <Link to="/Produtos"> Produtos </Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link to="/"> Home </Link>
            <Link to="/Sobre"> Sobre </Link>
            <Link to="/"> Produtos </Link>
            <Link to="/"> Contato </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;