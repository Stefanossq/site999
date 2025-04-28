export default function Noticias({ eventos = [] }) {
  return (
    <section>
      <header className="major">
        <h2>Notícias e Eventos</h2>
      </header>
      <div className="posts">
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <article key={evento.id}>
              <a href={evento.link || "#"} className="image">
                <img
                  src={evento.imagemUrl || "/images/placeholder.jpg"}
                  alt={evento.titulo || "Evento"}
                />
              </a>
              <h3>{evento.titulo || "Título não informado"}</h3>
              <p>{evento.descricao ? evento.descricao.slice(0, 150) + '...' : 'Descrição não disponível'}</p>
              <ul className="actions">
                <li>
                  <a href={evento.link || "#"} className="button">
                    Saiba Mais
                  </a>
                </li>
              </ul>
            </article>
          ))
        ) : (
          <p>Não há eventos disponíveis.</p>
        )}
      </div>
    </section>
  );
}
