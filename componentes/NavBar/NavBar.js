import Image from "next/image";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#Inicio">
        <Image
          src="/LogoMovies.png"
          alt="MovieWatch Logo"
          width={120}
          height={40}
        />
      </a>
      <div className="search-box">
        <input type="search" placeholder="Buscar películas o series..." />
      </div>
      <div className="nav-links">
        <a href="#Nuevo">Nuevo</a>
        <a href="#Popular">Popular</a>
        <a href="#Listas">Listas</a>
        <a href="#Deportes">Deportes</a>
      </div>
    </nav>
  );
}
