import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


export default function Professores() {
  // Dados do Departamento de Computação Aplicada (DCOM)
  const dcom = {
    nome: "DEPARTAMENTO DE COMPUTAÇÃO APLICADA (DCOM)",
    endereco: "Roraima nº 1000, Prédio 07, Sala 119",
    secretariaContato: "55 32208418",
    email: "sid.ct@ufsm.br",
    equipe: [
      { 
        funcao: "Chefia", 
        nome: "Daniel Welfer",
        imagem: "/images/professores/daniel-welfer.jpg" 
      },
      { 
        funcao: "Chefia Substituta", 
        nome: "Roseclea Duarte Medina",
        imagem: "/images/professores/roseclea-duarte-medina.jpg" 
      },
      { 
        funcao: "Secretário(a)", 
        nome: "Tatiane Fernanda Gomes",
        imagem: "/images/professores/tatiane-gomes.jpg" 
      },
      { 
        funcao: "Secretário(a) Substituto(a)", 
        nome: "Tania Maria Di Fante Pendeza",
        imagem: "/images/professores/tania-pendeza.jpg" 
      }
    ],
    docentes: [
      { nome: "Carlos Raniery Paula dos Santos", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/carlos-raniery-paula-dos-santos.jpg" },
      { nome: "Cesar Tadeu Pozzer", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/cesar-tadeu-pozzer.jpg" },
      { nome: "Daniel Welfer", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/daniel-welfer.jpg" },
      { nome: "Felipe Martins Muller", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/felipe-muller.jpg" },
      { nome: "Giliane Bernardi", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/giliane-bernardi.jpg" },
      { nome: "Joaquim Vinicius Carvalho Assunção", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/joaquim-vinicius-assuncao.jpg" },
      { nome: "Jonas Bulegon Gassen", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/jonas-bulegon-gassen.jpg" },
      { nome: "Lisandra Manzoni Fontoura", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/lisandra-fontoura.jpg" },
      { nome: "Luis Alvaro de Lima Silva", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/luis-alvaro-de-lima-silva.jpg" },
      { nome: "Marcos Cordeiro D'Ornellas", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/marcos-cordeiro-dornellas.jpg" },
      { nome: "Raul Ceretta Nunes", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/raul-ceretta.jpg" },
      { nome: "Roseclea Duarte Medina", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/roseclea-duarte-medina.jpg" },
      { nome: "Thiago Lopes Trugillo da Silveira", titulacao: "Doutorado", jornada: "DE", imagem: "/images/professores/thiago-trugillo.jpg" }
    ]
  };

  return (
    <>
      <Head>
        <title>Corpo Docente - SI UFSM</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div className="is-preload">
        <div id="wrapper">
          <Sidebar />
          
          <div id="main">
            <div className="inner">
              <Header />
              
              <section>
                <header className="main">
                  <h1>{dcom.nome}</h1>
                </header>

                <div className="image main">
                  <img src="/images/dcom-image.jpg" alt="Departamento de Computação Aplicada" />
                </div>

                <p><strong>Endereço:</strong> {dcom.endereco}</p>
                <p><strong>Secretaria:</strong> {dcom.secretariaContato}</p>
                <p><strong>E-mail:</strong> <a href={`mailto:${dcom.email}`}>{dcom.email}</a></p>

                <hr className="major" />

                <h2>Equipe</h2>
                <div className="equipe">
                  {dcom.equipe.map((membro, index) => (
                    <div key={index} className="membro-equipe">
                      <div className="avatar-container">
                        <img 
                          src={membro.imagem} 
                          alt={membro.nome}
                          className="avatar"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "/images/professores/default-avatar.jpg"
                          }}
                        />
                      </div>
                      <div className="info">
                        <p><strong>{membro.funcao}</strong></p>
                        <p>{membro.nome}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="major" />

                <h2>Docentes</h2>
                <div className="docentes">
                  {dcom.docentes.map((docente, index) => (
                    <div key={index} className="docente">
                      <div className="avatar-container">
                        <img 
                          src={docente.imagem} 
                          alt={docente.nome}
                          className="avatar"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "/images/professores/default-avatar.jpg"
                          }}
                        />
                      </div>
                      <div className="info">
                        <p><strong>{docente.nome}</strong></p>
                        <p>{docente.titulacao} - {docente.jornada}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image.main img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        section {
          padding: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .equipe, .docentes {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .membro-equipe, .docente {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .membro-equipe:hover, .docente:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .avatar-container {
          width: 80px;
          height: 80px;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .info {
          flex-grow: 1;
        }

        .info p {
          margin: 5px 0;
          color: #555;
          line-height: 1.4;
        }

        .info p:first-child {
          font-size: 1.1rem;
        }

        hr.major {
          border-top: 2px solid #eee;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          .equipe, .docentes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}