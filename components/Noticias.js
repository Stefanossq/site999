export default function Noticias() {
    return (
      <section>
        <header className="major">
          <h2>Notícias e Eventos</h2>
        </header>
        <div className="posts">
          <article>
            <a href="#" className="image">
              <img src="/images/pic01.jpg" alt="Semana Acadêmica" />
            </a>
            <h3>Semana Acadêmica 2023</h3>
            <p>Inscrições abertas para palestras e workshops sobre carreira em TI. De 20 a 24/11 no auditório do CT.</p>
            <ul className="actions">
              <li><a href="#" className="button">Saiba Mais</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image">
              <img src="/images/pic02.jpg" alt="Processo Seletivo" />
            </a>
            <h3>Processo Seletivo 2024/1</h3>
            <p>Editais para transferência externa e ingresso via ENEM serão publicados em dezembro.</p>
            <ul className="actions">
              <li><a href="#" className="button">Mais</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image">
              <img src="/images/pic03.jpg" alt="Maratona de Programação" />
            </a>
            <h3>Maratona de Programação</h3>
            <p>Equipe do SI UFSM classificada para a etapa regional da competição nacional.</p>
            <ul className="actions">
              <li><a href="#" className="button">Mais</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image">
              <img src="/images/pic04.jpg" alt="Novos Laboratórios" />
            </a>
            <h3>Novos Laboratórios</h3>
            <p>Inauguração do Lab. de IoT com equipamentos para desenvolvimento de soluções conectadas.</p>
            <ul className="actions">
              <li><a href="#" className="button">Mais</a></li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
  