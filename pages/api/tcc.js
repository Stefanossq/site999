// pages/api/tcc.js

let tccs = [
  {
    id: 1,
    titulo: 'Sistema de Monitoramento de Ambientes com IoT',
    autor: 'João da Silva',
    orientador: 'Prof. Dr. Carlos Souza',
    ano: 2024,
    link: 'https://repositorio.ufsm.br/handle/1/12345',
  },
  {
    id: 2,
    titulo: 'Aplicacao Web para Gestao de TCCs',
    autor: 'Maria Oliveira',
    orientador: 'Profa. Dra. Ana Paula Lima',
    ano: 2023,
    link: 'https://repositorio.ufsm.br/handle/1/67890',
  },
  {
    id: 3,
    titulo: 'Uso de Inteligência Artificial na Educação',
    autor: 'Lucas Fernandes',
    orientador: 'Prof. Dr. Renato Borges',
    ano: 2022,
    link: 'https://repositorio.ufsm.br/handle/1/11223',
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(tccs);
  } else if (req.method === 'POST') {
    const { titulo, autor, orientador, ano, link } = req.body;

    if (!titulo || !autor || !orientador || !ano || !link) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const novoTcc = {
      id: tccs.length + 1,
      titulo,
      autor,
      orientador,
      ano,
      link,
    };

    tccs.push(novoTcc);
    res.status(201).json(novoTcc);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
