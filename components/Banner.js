export default function Banner() {
    return (
      <section id="banner">
        <div className="content">
          <header>
            <h1>
              Bem-vindo ao curso de<br />
              Sistemas de Informação
            </h1>
            <p>Universidade Federal de Santa Maria</p>
          </header>
          <p>
            Formando profissionais capacitados para atuar no desenvolvimento, gestão e inovação em
            Tecnologia da Informação desde 1990.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button big">
                Calendário Acadêmico
              </a>
            </li>
          </ul>
        </div>
        <span className="image object">
          <img src="/images/pic10.jpg" alt="Banner Sistemas de Informação" />
        </span>
      </section>
    );
  }
  