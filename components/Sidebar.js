import Link from 'next/link'; // 👈 Importa Link do Next.js

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="inner">

        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Buscar..." />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <Link href="/" passHref legacyBehavior>
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/grade" passHref legacyBehavior>
                <a>Grade Curricular</a>
              </Link>
            </li>
            <li><a href="#">Corpo Docente</a></li>
            <li>
              <span className="opener">Recursos</span>
              <ul>
                <li><a href="#">Laboratórios</a></li>
                <li><a href="#">Biblioteca</a></li>
                <li><a href="#">Editais</a></li>
              </ul>
            </li>
            <li><a href="#">Estágios</a></li>
            <li><a href="#">TCC</a></li>
          </ul>
        </nav>

        {/* Contato */}
        <section>
          <header className="major">
            <h2>Contato</h2>
          </header>
          <p>Entre em contato com a coordenação do curso para mais informações:</p>
          <ul className="contact">
            <li className="icon solid fa-envelope"><a href="#">coordsi@ufsm.br</a></li>
            <li className="icon solid fa-phone">(55) 3220-8000</li>
            <li className="icon solid fa-home">Av. Roraima, 1000 - Prédio 74C<br />Santa Maria, RS</li>
          </ul>
        </section>

        {/* Footer */}
        <footer id="footer">
          <p className="copyright">
            &copy; SI UFSM. Todos os direitos reservados.
          </p>
        </footer>

      </div>
    </div>
  );
}
