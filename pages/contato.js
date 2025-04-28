import Head from 'next/head';
import ContatoForm from '../components/ContatoForm';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>

      <main>
        <h1>Entre em Contato</h1>
        <ContatoForm />
      </main>
    </>
  );
}
