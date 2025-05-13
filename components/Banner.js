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
          Tecnologia da Informação since 1990.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button big">
              Calendário Acadêmico
            </a>
          </li>
        </ul>
      </div>

      {/* Substituição da imagem aqui */}
      <span className="image object">
        <img
          src="/images/brasaoUFSM.svg"
          alt="Brasão da UFSM"
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </span>
    </section>
  );
}
