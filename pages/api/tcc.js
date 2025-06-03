// pages/api/tcc.js

let tccs = [
  {
    id: 1,
    titulo: 'Gestão de inscrições em programas de pós-graduação: modelagem e construção de uma plataforma webGestão de inscrições em programas de pós-graduação: modelagem e construção de uma plataforma web',
    autor: 'Scherer, Hierro Duarte',
    orientador: ' Prof. João Vicente Ferreira Lima',
    ano: 2024,
    link: 'https://repositorio.ufsm.br/handle/1/34236',
  },
  {
    id: 2,
    titulo: 'Desenvolvimento de um escape room educacional com personalização de conteúdos',
    autor: 'PRETTO, LARISSA CAVALHEIRO',
    orientador: 'Prof.ª Giliane Bernardi',
    ano: 2023,
    link: 'http://repositorio.ufsm.br/handle/1/33877',
  },
  {
    id: 3,
    titulo: 'Desenvolvimento de um protótipo de sistema web para suporte à psicoterapia',
    autor: 'Mello, Felipe Cechin',
    orientador: 'Prof. Dr. Celio Trois',
    ano: 2022,
    link: 'http://repositorio.ufsm.br/handle/1/35274',
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
