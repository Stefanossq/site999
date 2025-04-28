import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Diferenciais from '../components/Diferenciais';
import Noticias from '../components/Noticias';
import Sidebar from '../components/Sidebar';




export default function Home() {
  return (
    <>
      <Head>
        <title>Sistemas de Informação - UFSM</title>
      </Head>

      <div id="wrapper">
      <Sidebar />
        <div id="main">
          <div className="inner">
            <Header />
            <Banner />
            <Diferenciais />
            <Noticias />
          </div>
        </div>
      </div>
    </>
  );
}
