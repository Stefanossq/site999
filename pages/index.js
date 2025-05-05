import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Diferenciais from '../components/Diferenciais'
import Noticias from '../components/Noticias'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

export async function getServerSideProps() {
  // Tenta buscar os eventos
  try {
    const res = await fetch('https://www.ufsm.br/wp-json/wp/v2/eventos?per_page=4&_embed')
    
    if (!res.ok) throw new Error('Erro ao carregar eventos')
    
    const rawEventos = await res.json()

    const eventos = rawEventos.map(evento => ({
      id: evento.id,
      titulo: evento.acf?.evento_nome || 'Evento sem título',
      descricao: evento.acf?.evento_descricao 
        ? evento.acf.evento_descricao.replace(/<[^>]+>/g, '').substring(0, 100) + '...'
        : 'Descrição não disponível',
      imagemUrl: evento.acf?.evento_banner?.url || '/images/placeholder.jpg',
      link: evento.link || '#',
      data: evento.acf?.evento_data || ''
    }))

    return { props: { eventos } }

  } catch (error) {
    console.error('Erro:', error)
    return { props: { eventos: [] } } // Retorna vazio se der erro
  }
}

export default function Home({ eventos }) {
  return (
    <div className="is-preload">
      <Head>
        <title>Sistemas de Informação - UFSM</title>
        <meta name="description" content="Site oficial do curso de Sistemas de Informação da UFSM" />
      </Head>

      <div id="wrapper">
        <Sidebar />
        
        <div id="main">
          <div className="inner">
            <Header />
            <Banner />
            <Diferenciais />
            <Noticias eventos={eventos} />
            
            {eventos.length > 0 && (
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Link href="/noticias" className="button">
                  Ver Todas as Notícias
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}