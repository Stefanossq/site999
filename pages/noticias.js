import { PrismaClient } from '@prisma/client';
import Noticias from '../components/Noticias'; // Ajuste o caminho conforme seu projeto!

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const eventos = await prisma.evento.findMany({
    orderBy: { data: 'desc' },
    take: 4,
  });

  return {
    props: {
      eventos: JSON.parse(JSON.stringify(eventos)),
    },
  };
}

export default function NoticiasPage({ eventos }) {
  return (
    <div>
      <Noticias eventos={eventos} />
    </div>
  );
}
