import React from "react";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <a className="logo" href="#Inicio">
            <Image
              src="/LogoMovies.png"
              alt="MovieWatch Logo"
              width={120}
              height={40}
            />
          </a>
        </div>

        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Buenos Aires, Argentina</p>
          <p>MovieWatch@gmail.com</p>
          <p>+54 11 1234 5678</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Recibí novedades semanales de estrenos</p>
          <form>
            <input type="email" placeholder="Tu email" />
            <button type="submit">SUSCRIBIRME</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; MovieWatch 2025. Todos los derechos reservados. Hecho para la materia Programación 3er año - Universidad Maimónides</p>
      </div>
    </footer>
  );
}
