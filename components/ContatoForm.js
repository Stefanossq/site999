import { useState } from 'react';

export default function ContatoForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setStatus(result.message);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="input"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="input"
        />
      </div>
      <div>
        <textarea
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="input"
        ></textarea>
      </div>
      <ul className="actions">
        <li><button type="submit" className="button primary">Enviar Mensagem</button></li>
      </ul>

      {status && <p style={{ marginTop: '1rem', color: 'green' }}>{status}</p>}
    </form>
  );
}
