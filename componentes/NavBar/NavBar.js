"use client";

import Image from "next/image";
import "./NavBar.css";
import Link from "next/link";
import { useAppContext } from "../../contexts/AppContext";

export default function Navbar() {
  const { favorites } = useAppContext();
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image
          src="/LogoMovies.png"
          alt="MovieWatch Logo"
          width={120}
          height={40}
        />
      </Link>
      <div className="nav-links">
        <a href="#Nuevo">Nuevo</a>
        <a href="#Popular">Popular</a>
        <Link href="/favorites">Favoritos ({favorites.length})</Link>

      </div>
    </nav>
  );
}
