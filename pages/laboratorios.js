import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Laboratorios() {
  return (
    <>
      <Head>
        <title>Laboratórios - SI UFSM</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="is-preload">
        <div id="wrapper">
          <Sidebar />

          <div id="main">
            <div className="inner">
              <Header />

              <section>
                <header className="main">
                  <h1>Laboratórios</h1>
                  <p>Conheça os principais laboratórios vinculados ao curso de Sistemas de Informação.</p>
                </header>

                {/* NCC */}
                <div className="lab-card">
                  <div className="lab-logo">
                    <Image
                      src="/images/logo-ncc.png"
                      alt="Logo NCC"
                      width={130}
                      height={130}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="lab-info">
                    <h2>Núcleo de Computação Científica (NCC)</h2>
                    <p><strong>Salas:</strong> Lab 334, Lab 338</p>
                    <p>
                      O NCC desenvolve atividades voltadas à computação científica e projetos interdisciplinares na UFSM.
                      Saiba mais em: <a href="http://ncc.inf.ufsm.br/laboratorios-de-ensino-ncc/" target="_blank" rel="noopener noreferrer">ncc.inf.ufsm.br</a>
                    </p>
                  </div>
                </div>

                {/* UTI-CT */}
                <div className="lab-card">
                  <div className="lab-logo">
                    <Image
                      src="/images/sub-logo.png"
                      alt="Logo UTI-CT"
                      width={130}
                      height={130}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="lab-info">
                    <h2>Unidade de Tecnologia da Informação (UTI-CT)</h2>
                    <p><strong>Salas:</strong> Lab 215, Lab 301, Lab 354, Lab 361</p>
                    <p>
                      A UTI-CT é responsável por infraestrutura e suporte tecnológico do CT e também oferece laboratórios para atividades acadêmicas.
                      Saiba mais em: <a href="https://www.ufsm.br/unidades-universitarias/ct/unidade-de-tecnologia-da-informacao" target="_blank" rel="noopener noreferrer">ufsm.br</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lab-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: #f8f8f8;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .lab-logo {
          flex-shrink: 0;
          margin-right: 2rem;
          background: white;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .lab-info h2 {
          margin-top: 0;
          font-size: 1.75rem;
        }

        .lab-info p {
          margin: 0.5rem 0;
          line-height: 1.6;
        }

        a {
          color: #0070f3;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .lab-card {
            flex-direction: column;
            text-align: center;
          }

          .lab-logo {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}
