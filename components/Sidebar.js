// components/Sidebar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Grade Curricular', href: '/grade' },
    { label: 'Corpo Docente', href: '/professores' },
    {
      label: 'Recursos',
      submenu: [
        { label: 'Laboratórios', href: '/laboratorios' },
        { label: 'Biblioteca', href: '/biblioteca' },
        { label: 'Editais', href: '/editais' },
      ],
    },
    {
      label: 'Estágios',
      href: 'https://www.ufsm.br/pet/ciencia-da-computacao/editais/0012024-2024',
      external: true,
    },
    {
      label: 'TCC',
      href: '/tcc',
    },
  ];

  const toggleSubmenu = (label) => {
    setSubmenuOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="sidebar-toggle"
        style={{
          position: 'fixed',
          left: sidebarVisible ? '300px' : '0',
          top: '20px',
          zIndex: 1001,
          transition: 'left 0.3s ease',
        }}
      >
        {sidebarVisible ? '◄' : '►'}
      </button>

      <div
        id="sidebar"
        className="original-style"
        style={{
          width: sidebarVisible ? '300px' : '0',
          overflow: 'hidden',
          transition: 'width 0.3s ease',
        }}
      >
        <div className="inner">
          <section id="search" className="alt">
            <form method="post" action="#">
              <input
                type="text"
                name="query"
                id="query"
                placeholder="Buscar..."
              />
            </form>
          </section>

          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={item.submenu && submenuOpen[item.label] ? 'active' : ''}
                >
                  {item.submenu ? (
                    <>
                      <span
                        className="opener"
                        onClick={() => toggleSubmenu(item.label)}
                        style={{ cursor: 'pointer' }}
                      >
                        {item.label}
                      </span>
                      <ul style={{ display: submenuOpen[item.label] ? 'block' : 'none' }}>
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link href={sub.href}>{sub.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <header className="major">
              <h2>Contato</h2>
            </header>
            <p>Entre em contato com a coordenação do curso para mais informações:</p>
            <ul className="contact">
              <li className="icon solid fa-envelope">
                <a href="mailto:coordsi@ufsm.br">coordsi@ufsm.br</a>
              </li>
              <li className="icon solid fa-phone">(55) 3220-8000</li>
              <li className="icon solid fa-home">
                Av. Roraima, 1000 - Prédio 7
                <br />
                Santa Maria, RS
              </li>
            </ul>
          </section>

          <footer id="footer">
            <p className="copyright">
              &copy; SI UFSM. Todos os direitos reservados.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
