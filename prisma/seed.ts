import { PrismaClient } from '@prisma/client';
import eventos from './eventos.json'; // Importação direta!

const prisma = new PrismaClient();

async function main() {
  let sucesso = 0;
  let erro = 0;

  for (const item of eventos) {
    const evento = {
      id: item.id,
      titulo: item.acf?.evento_nome || 'Evento sem título',
      descricao: item.acf?.evento_descricao?.replace(/<[^>]*>?/gm, '') || 'Sem descrição',
      data: item.acf?.evento_inicio
        ? item.acf.evento_inicio.split(' ')[0].split('/').reverse().join('-')
        : item.date.split('T')[0],
      local: item.acf?.evento_local || 'Local não informado',
      categoria: item.acf?.evento_categoria || null,
      tipo: item.type || null,
      imagemUrl: item.acf?.evento_banner?.url || null,
      link: item.link || null,
    };

    try {
      await prisma.evento.create({
        data: evento,
      });
      console.log(`✅ Evento inserido: ${evento.titulo}`);
      sucesso++;
    } catch (e) {
      console.error(`❌ Erro ao inserir evento: ${evento.titulo}`, e.message || e);
      erro++;
    }
  }

  console.log('\n🎯 Seed finalizado!');
  console.log(`✅ Eventos inseridos com sucesso: ${sucesso}`);
  console.log(`❌ Eventos com erro: ${erro}`);
}

main()
  .catch((e) => {
    console.error('❌ Erro geral no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
