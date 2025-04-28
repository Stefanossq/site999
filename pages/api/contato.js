export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      console.log('Mensagem recebida:', { name, email, message });
  
      res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }
  