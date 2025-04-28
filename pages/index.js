import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Diferenciais from '../components/Diferenciais';
import Noticias from '../components/Noticias';
import Sidebar from '../components/Sidebar';
import { PrismaClient } from '@prisma/client'; // Prisma para buscar eventos
import Link from 'next/link'; // Importar Link do Next.js

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const eventos = await prisma.evento.findMany({
    orderBy: { data: 'desc' },
    take: 4, // Pegando apenas 4 eventos
  });

  return {
    props: {
      eventos: JSON.parse(JSON.stringify(eventos)),
    },
  };
}

export default function Home({ eventos }) {
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
            {/* Passa eventos para Noticias */}
            <Noticias eventos={eventos} />
            {/* Botão para ver mais notícias */}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/noticias" passHref legacyBehavior>
                <a className="button">Ver Todas as Notícias</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
