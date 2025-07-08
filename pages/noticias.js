import Noticias from '../components/Noticias';

export async function getServerSideProps() {
  const res = await fetch('https://www.ufsm.br/wp-json/wp/v2/eventos?per_page=12&_embed');
  const rawEventos = await res.json();

  const eventos = rawEventos.map((evento) => ({
    id: evento.id,
    titulo: evento.acf?.evento_nome || 'Título não informado',
    descricao: evento.acf?.evento_descricao
      ? evento.acf.evento_descricao.replace(/<[^>]+>/g, '')
      : 'Descrição não disponível',
    imagemUrl: evento.acf?.evento_banner?.url || '/images/placeholder.jpg',
    link: evento.link || '#',
  }));

  return {
    props: {
      eventos,
    },
  };
}

export default function NoticiasPage({ eventos }) {
  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Notícias e Eventos
      </h1>
      <Noticias eventos={eventos} />
    </main>
  );
}
