import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Grade() {
  return (
    <>
      <Head>
        <title>Grade Curricular - SI UFSM</title>
      </Head>

      <div id="wrapper">
        <Sidebar />
        <div id="main">
          <div className="inner">
            <Header />
            <section>
              <header className="major">
                <h2>Grade Curricular</h2>
              </header>

              <p>Aqui vai a grade curricular do curso!</p>
              {/* Depois adiciona a tabela aqui */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
