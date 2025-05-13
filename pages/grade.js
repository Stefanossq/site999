import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import { useState } from 'react';

export default function Grade() {
  const [activeSemester, setActiveSemester] = useState(null);

  const toggleSemester = (semester) => {
    setActiveSemester(activeSemester === semester ? null : semester);
  };

  // Dados dos semestres
  const semesters = [
    {
      title: '1º Semestre',
      courses: [
        { name: 'Cálculo "A"', workload: '90h', code: 'MTM1019', credits: 6, type: 'Obrigatória' },
        { name: 'Circuitos Digitais', workload: '60h', code: 'ELC1010', credits: 3, type: 'Obrigatória' },
        { name: 'Introdução a Sistemas de Informação', workload: '30h', code: 'ELC1075', credits: 2, type: 'Obrigatória' },
        { name: 'Laboratório de Programação I', workload: '60h', code: 'ELC1065', credits: 2, type: 'Obrigatória' },
        { name: 'Lógica e Algoritmo', workload: '60h', code: 'ELC1064', credits: 4, type: 'Obrigatória' },
        { name: 'Teoria Geral da Administração', workload: '60h', code: 'CAD1002', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '2º Semestre',
      courses: [
        { name: 'Estrutura de Dados', workload: '90h', code: 'INF1020', credits: 6, type: 'Obrigatória' },
        { name: 'Arquitetura de Computadores', workload: '60h', code: 'INF1030', credits: 4, type: 'Obrigatória' },
        { name: 'Cálculo Diferencial', workload: '60h', code: 'MTM1020', credits: 5, type: 'Obrigatória' },
        { name: 'Sistemas Operacionais', workload: '60h', code: 'INF1040', credits: 4, type: 'Obrigatória' },
        { name: 'Algoritmos e Programação II', workload: '90h', code: 'INF1050', credits: 6, type: 'Obrigatória' },
      ],
    },
    {
      title: '3º Semestre',
      courses: [
        { name: 'Banco de Dados', workload: '90h', code: 'INF2010', credits: 6, type: 'Obrigatória' },
        { name: 'Engenharia de Software', workload: '60h', code: 'INF2020', credits: 4, type: 'Obrigatória' },
        { name: 'Matemática Discreta', workload: '60h', code: 'MAT1020', credits: 4, type: 'Obrigatória' },
        { name: 'Redes de Computadores', workload: '60h', code: 'INF2030', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '4º Semestre',
      courses: [
        { name: 'Análise e Projeto de Sistemas', workload: '90h', code: 'INF3010', credits: 6, type: 'Obrigatória' },
        { name: 'Programação Orientada a Objetos', workload: '60h', code: 'INF3020', credits: 4, type: 'Obrigatória' },
        { name: 'Sistemas Distribuídos', workload: '60h', code: 'INF3030', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '5º Semestre',
      courses: [
        { name: 'Inteligência Artificial', workload: '90h', code: 'INF4010', credits: 6, type: 'Obrigatória' },
        { name: 'Gerenciamento de Projetos', workload: '60h', code: 'INF4020', credits: 4, type: 'Obrigatória' },
        { name: 'Design de Sistemas', workload: '60h', code: 'INF4030', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '6º Semestre',
      courses: [
        { name: 'Compiladores', workload: '90h', code: 'INF5010', credits: 6, type: 'Obrigatória' },
        { name: 'Métodos Ágeis', workload: '60h', code: 'INF5020', credits: 4, type: 'Obrigatória' },
        { name: 'Segurança da Informação', workload: '60h', code: 'INF5030', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '7º Semestre',
      courses: [
        { name: 'Sistemas de Informação Empresariais', workload: '90h', code: 'INF6010', credits: 6, type: 'Obrigatória' },
        { name: 'Engenharia de Requisitos', workload: '60h', code: 'INF6020', credits: 4, type: 'Obrigatória' },
        { name: 'Gestão de Banco de Dados', workload: '60h', code: 'INF6030', credits: 4, type: 'Obrigatória' },
      ],
    },
    {
      title: '8º Semestre',
      courses: [
        { name: 'Trabalho de Conclusão de Curso', workload: '360h', code: 'INF7010', credits: 20, type: 'Obrigatória' },
        { name: 'Estágio Supervisionado', workload: '360h', code: 'INF7020', credits: 20, type: 'Obrigatória' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Grade Curricular - SI UFSM</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>

      <div className="is-preload">
        <div id="wrapper">
          <Sidebar />
          
          <div id="main">
            <div className="inner">
              <Header />
              
              {/* Conteúdo Principal */}
              <section>
                <header className="main">
                  <h1>Grade Curricular</h1>
                </header>

                <div className="image main">
                  <Image 
                    src="/images/pic11.jpg" 
                    alt="Estudantes de SI" 
                    width={1200}
                    height={400}
                    layout="responsive"
                  />
                </div>

                <p>O curso de Sistemas de Informação da UFSM possui uma grade atualizada com as principais tecnologias do mercado. Duração: 8 semestres.</p>
                
                <hr className="major" />

                <h2>Estrutura do Curso</h2>
                <p>O currículo é composto por disciplinas obrigatórias, eletivas e atividades complementares:</p>
                <ul>
                  <li><strong>3.105 horas</strong> de carga horária total</li>
                  <li><strong>255 horas</strong> mínimas por período</li>
                  <li><strong>540 horas</strong> máximo por período</li>
                </ul>

                <hr className="major" />

                <h2>Disciplinas Obrigatórias</h2>

                <div className="accordion">
                  {semesters.map((semester, index) => (
                    <div key={index} className="semester">
                      <h3
                        className="semester-title"
                        onClick={() => toggleSemester(index)}
                        style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
                      >
                        {semester.title}
                      </h3>
                      {activeSemester === index && (
                        <div
                          className="semester-content"
                          style={{
                            padding: '20px',
                            backgroundColor: '#fafafa',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <ul style={{ listStyleType: 'none' }}>
                            {semester.courses.map((course, courseIndex) => (
                              <li key={courseIndex}>
                                <strong>{course.name}</strong>
                                <br />
                                <em>Carga Horária:</em> {course.workload} <br />
                                <em>Código:</em> {course.code} <br />
                                <em>Créditos:</em> {course.credits} <br />
                                <em>Tipo:</em> {course.type}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <hr className="major" />

                <h2>Disciplinas Eletivas</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
