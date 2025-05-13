import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Biblioteca() {
  return (
    <>
      <Head>
        <title>Biblioteca Setorial do Centro de Tecnologia – BSCT</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="is-preload">
        <div id="wrapper">
          <Sidebar />

          <div id="main">
            <div className="inner">
              <Header />

              <section>
                <header className="main">
                  <h1>Biblioteca Setorial do Centro de Tecnologia – BSCT</h1>
                </header>

                {/* Banner da Biblioteca */}
                <div className="banner">
                  <Image
                    src="/images/CTsetorial-300x95.png"
                    alt="Biblioteca Setorial CT"
                    width={300}
                    height={95}
                    objectFit="contain"
                  />
                </div>

                {/* Apresentação */}
                <div className="content">
                  <h2>Apresentação</h2>
                  <p>
                    A Biblioteca Setorial do Centro de Tecnologia surgiu através da mobilização dos professores do Centro e
                    inaugurou com 1846 livros doados e 117 livros comprados com verbas de projetos realizados pelos cursos do CT.
                    Além disso, foi a primeira biblioteca setorial informatizada da UFSM.
                  </p>
                  <p>
                    Atualmente a BSCT conta com um acervo em torno de <strong>20.750 itens</strong>, dentre eles livros, folhetos,
                    periódicos, trabalhos acadêmicos, monografias, artigos de especialização, dissertações, teses, CDs e DVDs.
                  </p>
                  <p>
                    A BSCT funciona de <strong>segunda a sexta, das 8h às 12h e das 13h às 17h</strong>.
                  </p>
                  <p>
                    Nos siga nas redes sociais! <strong>@bsctufsm</strong> no Facebook e Instagram.
                  </p>
                </div>

                {/* Carrossel de Imagens */}
                <div className="carousel-container">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    interval={4000}
                    dynamicHeight={false}
                  >
                    <div className="carousel-image">
                      <Image
                        src="/images/foto-BSCT-1.jpeg"
                        alt="Foto 1 da Biblioteca"
                        width={633}
                        height={481}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="carousel-image">
                      <Image
                        src="/images/foto-BSCT-2.jpeg"
                        alt="Foto 2 da Biblioteca"
                        width={633}
                        height={481}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="carousel-image">
                      <Image
                        src="/images/foto-BSCT-3.jpg"
                        alt="Foto 3 da Biblioteca"
                        width={633}
                        height={481}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </Carousel>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner {
          margin: 2rem 0;
          text-align: center;
        }

        .content {
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .content h2 {
          margin-top: 0;
        }

        .content p {
          margin: 1rem 0;
          line-height: 1.6;
        }

        strong {
          color: #333;
        }

        .carousel-container {
          margin-top: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 12px;
          overflow: hidden;
        }

        .carousel-image {
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .content {
            padding: 1.5rem;
          }

          .carousel-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}
