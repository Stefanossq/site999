// pages/tcc.js

import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function TCCPage() {
  const [tccs, setTccs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTccs, setFilteredTccs] = useState([]);

  // Busca os TCCs da API
  useEffect(() => {
    fetch('/api/tcc')
      .then((res) => res.json())
      .then((data) => {
        setTccs(data);
        setFilteredTccs(data);
      })
      .catch((err) => console.error('Erro ao buscar TCCs:', err));
  }, []);

  // Filtro de pesquisa
  useEffect(() => {
    const termo = search.toLowerCase();
    const filtrados = tccs.filter((tcc) =>
      tcc.titulo.toLowerCase().includes(termo) ||
      tcc.autor.toLowerCase().includes(termo) ||
      tcc.orientador.toLowerCase().includes(termo) ||
      String(tcc.ano).includes(termo)
    );
    setFilteredTccs(filtrados);
  }, [search, tccs]);

  return (
    <>
      <Head>
        <title>TCCs - Sistemas de Informação UFSM</title>
      </Head>

      <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Trabalhos de Conclusão de Curso (TCC)</h1>
        <p>
          Explore os TCCs já desenvolvidos no curso de Sistemas de Informação. Você pode buscar por título, autor, orientador ou ano.
        </p>

        {/* Filtro de busca */}
        <div style={{ margin: '2rem 0' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título, autor, orientador ou ano..."
            style={{
              width: '100%',
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Lista de TCCs */}
        <section>
          {filteredTccs.length > 0 ? (
            filteredTccs.map((tcc) => (
              <div
                key={tcc.id}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  backgroundColor: '#fafafa',
                }}
              >
                <h3 style={{ margin: 0 }}>{tcc.titulo}</h3>
                <p style={{ margin: '0.2rem 0' }}>
                  <strong>Autor:</strong> {tcc.autor}
                </p>
                <p style={{ margin: '0.2rem 0' }}>
                  <strong>Orientador:</strong> {tcc.orientador}
                </p>
                <p style={{ margin: '0.2rem 0' }}>
                  <strong>Ano:</strong> {tcc.ano}
                </p>
                <a
                  href={tcc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0070f3' }}
                >
                  Ver no Repositório
                </a>
              </div>
            ))
          ) : (
            <p>Nenhum TCC encontrado com esse termo.</p>
          )}
        </section>

        {/* Área futura para ações (login, submissão etc.) */}
        <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          <h2>Submissão de Propostas</h2>
          <p>
            Não implementado ainda. 
          </p>
        </section>
      </main>
    </>
  );
}