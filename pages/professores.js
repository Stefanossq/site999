import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Componente SVG para o ícone do professor
const ProfessorIcon = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="5" stroke="#666" strokeWidth="1.5"/>
    <path d="M17 14H7C4.79086 14 3 15.7909 3 18V22H21V18C21 15.7909 19.2091 14 17 14Z" stroke="#666" strokeWidth="1.5"/>
    <path d="M12 14V22" stroke="#666" strokeWidth="1.5"/>
  </svg>
);

export default function Professores() {
  // Dados do Departamento de Computação Aplicada (DCOM)
  const dcom = {
    nome: "DEPARTAMENTO DE COMPUTAÇÃO APLICADA (DCOM)",
    endereco: "Roraima nº 1000, Prédio 07, Sala 119",
    secretariaContato: "55 32208418",
    email: "sid.ct@ufsm.br",
    equipe: [
      { funcao: "Chefia", nome: "Daniel Welfer" },
      { funcao: "Chefia Substituta", nome: "Roseclea Duarte Medina" },
      { funcao: "Secretário(a)", nome: "Tatiane Fernanda Gomes" },
      { funcao: "Secretário(a) Substituto(a)", nome: "Tania Maria Di Fante Pendeza" }
    ],
    docentes: [
      { nome: "Carlos Raniery Paula dos Santos", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Cesar Tadeu Pozzer", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Daniel Welfer", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Felipe Martins Muller", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Giliane Bernardi", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Joaquim Vinicius Carvalho Assunção", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Jonas Bulegon Gassen", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Lisandra Manzoni Fontoura", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Luis Alvaro de Lima Silva", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Marcos Cordeiro D'Ornellas", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Raul Ceretta Nunes", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Roseclea Duarte Medina", titulacao: "Doutorado", jornada: "DE" },
      { nome: "Thiago Lopes Trugillo da Silveira", titulacao: "Doutorado", jornada: "DE" }
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
                      <ProfessorIcon />
                      <p><strong>{membro.funcao}:</strong> {membro.nome}</p>
                    </div>
                  ))}
                </div>

                <hr className="major" />

                <h2>Docentes</h2>
                <div className="docentes">
                  {dcom.docentes.map((docente, index) => (
                    <div key={index} className="docente">
                      <ProfessorIcon />
                      <p><strong>{docente.nome}</strong> - {docente.titulacao} - {docente.jornada}</p>
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
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .membro-equipe, .docente {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .membro-equipe svg, .docente svg {
          width: 60px;
          height: 60px;
          margin-right: 20px;
          fill: #666;
        }

        .membro-equipe p, .docente p {
          font-size: 1rem;
          color: #555;
        }

        .docente strong, .membro-equipe strong {
          color: #333;
        }

        hr.major {
          border-top: 2px solid #eee;
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
}
