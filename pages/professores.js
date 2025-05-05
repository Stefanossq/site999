import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Componente SVG para o ícone do professor
const ProfessorIcon = () => (
  <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="5" stroke="#333" strokeWidth="2"/>
    <path d="M17 14H7C4.79086 14 3 15.7909 3 18V22H21V18C21 15.7909 19.2091 14 17 14Z" stroke="#333" strokeWidth="2"/>
    <path d="M12 14V22" stroke="#333" strokeWidth="2"/>
  </svg>
);

export default function Professores() {
  // Dados dos professores
  const professores = [
    {
      id: 1,
      nome: "Dr. C charpas Silva",
      area: "Banco de Dados",
      email: "joao.silva@ufsm.br",
      lattes: "http://lattes.cnpq.br/123456"
    },
    {
      id: 2,
      nome: "Dra. Ruby Oliveira",
      area: "Inteligência Artificial",
      email: "maria.oliveira@ufsm.br",
      lattes: "http://lattes.cnpq.br/654321"
    },
    {
      id: 3,
      nome: "Dr. JavaScript Santos",
      area: "Desenvolvimento Web",
      email: "1234@ufsm.br",
      lattes: "http://lattes.cnpq.br/987654"
    }
  ];

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
                  <h1>Corpo Docente</h1>
                </header>

                <div className="image main">
                  <svg width="100%" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1200" height="400" fill="#f5f5f5"/>
                    <text x="50%" y="50%" textAnchor="middle" fill="#333" fontSize="48" fontFamily="Arial">
                      Professores do Curso de SI
                    </text>
                  </svg>
                </div>

                <p>Corpo docente do curso de Sistemas de Informação.</p>
                
                <hr className="major" />

                <h2>Professores Efetivos</h2>
                
                <div className="professores-grid">
                  {professores.map(professor => (
                    <div key={professor.id} className="professor-card">
                      <div className="professor-icon">
                        <ProfessorIcon />
                      </div>
                      <div className="professor-info">
                        <h3>{professor.nome}</h3>
                        <p><strong>Área:</strong> {professor.area}</p>
                        <p>
                          <strong>Email:</strong> 
                          <a href={`mailto:${professor.email}`}> {professor.email}</a>
                        </p>
                        <p>
                          <strong>Lattes:</strong> 
                          <a href={professor.lattes} target="_blank" rel="noopener noreferrer"> Ver currículo</a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="major" />

                <h2>Professores Colaboradores</h2>
                <div className="professores-grid">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="professor-card">
                      <div className="professor-icon">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="7" r="5" stroke="#666" strokeWidth="1.5"/>
                          <path d="M17 14H7C4.79086 14 3 15.7909 3 18V22H21V18C21 15.7909 19.2091 14 17 14Z" stroke="#666" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div className="professor-info">
                        <h3>Professor Colaborador {i+1}</h3>
                        <p><strong>Área:</strong> Especialização</p>
                        <p><strong>Contato:</strong> colaborador{i+1}@ufsm.br</p>
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
        .professores-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .professor-card {
          display: flex;
          background: #f8f8f8;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem;
          align-items: center;
        }
        
        .professor-icon {
          width: 80px;
          height: 80px;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .professor-info {
          flex-grow: 1;
        }
        
        @media (max-width: 600px) {
          .professor-card {
            flex-direction: column;
            text-align: center;
          }
          
          .professor-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}