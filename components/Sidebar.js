'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const [inactive, setInactive] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = (e) => {
    e.preventDefault();
    setInactive(!inactive);
  };

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="sidebar" className={inactive ? 'inactive' : ''}>
      <div className="inner">

        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Pesquisar" />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/grade">Grade Curricular</Link>
            </li>
            <li>
              <Link href="/professores">Corpo Docente</Link>
            </li>
            <li className={openMenus[1] ? 'active' : ''}>
              <span className="opener" onClick={() => toggleSubMenu(1)}>Recursos</span>
              <ul>
                <li><Link href="/laboratorios">Laboratórios</Link></li>
                <li><Link href="/biblioteca">Biblioteca</Link></li>
                <li><Link href="/editais">Editais</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/estagios">Estágios</Link>
            </li>
            <li>
              <Link href="/tcc">TCC</Link>
            </li>
          </ul>
        </nav>

        
        <section>
          <header className="major">
            <h2>Destaques</h2>
          </header>
          <div className="mini-posts">
            <article>
              <Link href="#" passHref>
                <div className="image-wrapper">
                  <Image
                    src="/images/JICOMP.webp"
                    alt="Evento JICOMP"
                    width={300}
                    height={200}
                    className="image"
                    quality={80}
                  />
                </div>
              </Link>
              <p>Confira os destaques do JICOMP deste ano.</p>
            </article>
            <article>
              <Link href="#" passHref>
                <div className="image-wrapper">
                  <Image
                    src="/images/NEXT.webp"
                    alt="Evento NEXT"
                    width={300}
                    height={200}
                    className="image"
                    quality={80}
                  />
                </div>
              </Link>
              <p>Próximos eventos e novidades da área de tecnologia.</p>
            </article>
          </div>
          <ul className="actions">
            <li><Link href="#" className="button">Ver todos os eventos</Link></li>
          </ul>
        </section>

        {/* Seção de Contato */}
        <section>
          <header className="major">
            <h2>Fale Conosco</h2>
          </header>
          <p>Entre em contato com a coordenação para dúvidas e orientações.</p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="mailto:email@exemplo.com">coord-bsi@inf.ufsm.br</a>
            </li>
            <li className="icon solid fa-phone">(55) 3220.9636</li>
            <li className="icon solid fa-home">
              Universidade Federal<br />
              Santa Maria - RS
            </li>
          </ul>
        </section>

        <footer id="footer">
          <p className="copyright">
            &copy; Curso de Sistemas. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      <a href="#" className="toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">&#9776;</a>
    </div>
  );
}