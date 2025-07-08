export default function Banner() {
  return (
    <section
      id="banner"
      className="banner"
      aria-label="Apresentação do curso de Sistemas de Informação da UFSM"
    >
      <div className="banner-content">
        <header>
          <h1>
            Bem-vindo ao curso de<br />
            Sistemas de Informação
          </h1>
          <p>Universidade Federal de Santa Maria</p>
        </header>
        <p>Tecnologia da Informação since 1990.</p>
        <ul className="actions">
          <li>
            <a href="#" className="button big">
              Calendário Acadêmico
            </a>
          </li>
        </ul>
      </div>

      <div className="banner-image">
        <img
          src="/images/brasaoUFSM.svg"
          alt="Brasão da UFSM"
        />
      </div>

      <style jsx>{`
        #banner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem;
        }

        .banner-content {
          flex: 1 1 300px;
        }

        .banner-image {
          flex: 1 1 200px;
          max-width: 300px;
          margin: 0 auto;
        }

        .banner-image img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          animation: fadeIn 1s ease-in-out;
        }

   

    
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          #banner {
            flex-direction: column;
            text-align: center;
          }

          .banner-image {
            max-width: 200px;
          }
        }

        @media (prefers-color-scheme: dark) {
          #banner {
            background-color: #1a1a1a;
            color: white;
          }

          .button.big {
            background-color: #333;
            color: white;
          }

          .button.big:hover {
            background-color: #555;
          }
        }
      `}</style>
    </section>
  );
}
