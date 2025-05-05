import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function Grade() {
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
                  <li><strong>255 horas</strong> minímas por período</li>
                  <li><strong>540 horas</strong> máximo por período</li>
                </ul>

                <hr className="major" />

                <h2>Disciplinas Obrigatórias</h2>
                <div className="box">
                  <h4>1º Semestre</h4>
                  <ul>
                    <li>Algoritmos e Programação</li>
                    <li>Matemática Discreta</li>
                    <li>Introdução à Computação</li>
                  </ul>

                  <h4>2º Semestre</h4>
                  <ul>
                    <li>Estrutura de Dados</li>
                    <li>Arquitetura de Computadores</li>
                    <li>Cálculo Diferencial</li>
                  </ul>
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