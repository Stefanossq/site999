import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  // Controle do menu dropdown
  const [recursosAberto, setRecursosAberto] = useState(false);

  return (
    <div id="sidebar" className="original-style"> {/* Classe original mantida */}
      <div className="inner">
        
        {/* Seção de Busca (estilo original) */}
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

        {/* Menu Principal - Estilo IDÊNTICO ao template */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><Link href="/" legacyBehavior><a>Início</a></Link></li>
            <li><Link href="/grade" legacyBehavior><a>Grade Curricular</a></Link></li>
            <li><Link href="/professores" legacyBehavior><a>Corpo Docente</a></Link></li>
            
            {/* Dropdown de Recursos - Funcional mas com estilo original */}
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
            
            <li><Link href="/estagios" legacyBehavior><a>Estágios</a></Link></li>
            <li><Link href="/tcc" legacyBehavior><a>TCC</a></Link></li>
          </ul>
        </nav>

        {/* Seção de Contato - EXATAMENTE como no template */}
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

        {/* Footer - IDÊNTICO ao original */}
        <footer id="footer">
          <p className="copyright">
            &copy; SI UFSM. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}