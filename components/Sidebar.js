import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [recursosAberto, setRecursosAberto] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* Botão de toggle - pode ser posicionado onde você quiser */}
      <button 
        onClick={toggleSidebar}
        className="sidebar-toggle"
        style={{
          position: 'fixed',
          left: sidebarVisible ? '300px' : '0',
          top: '20px',
          zIndex: 1001,
          transition: 'left 0.3s ease'
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
          transition: 'width 0.3s ease'
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
              <li><Link href="/" legacyBehavior><a>Início</a></Link></li>
              <li><Link href="/grade" legacyBehavior><a>Grade Curricular</a></Link></li>
              <li><Link href="/professores" legacyBehavior><a>Corpo Docente</a></Link></li>
              
              <li className={recursosAberto ? 'active' : ''}>
                <span 
                  className="opener"
                  onClick={() => setRecursosAberto(!recursosAberto)}
                  style={{ cursor: 'pointer' }}
                >
                  Recursos
                </span>
                <ul style={{ display: recursosAberto ? 'block' : 'none' }}>
                  <li><Link href="/laboratorios" legacyBehavior><a>Laboratórios</a></Link></li>
                  <li><Link href="/biblioteca" legacyBehavior><a>Biblioteca</a></Link></li>
                  <li><Link href="/editais" legacyBehavior><a>Editais</a></Link></li>
                </ul>
              </li>
              
              <li><Link href="https://www.ufsm.br/pet/ciencia-da-computacao/editais/0012024-2024" legacyBehavior><a>Estágios</a></Link></li>
              <li><Link href="https://repositorio.ufsm.br/handle/1/25131" legacyBehavior><a>TCC</a></Link></li>
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
              <li className="icon solid fa-phone">
                (55) 3220-8000
              </li>
              <li className="icon solid fa-home">
                Av. Roraima, 1000 - Prédio 7<br />
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
