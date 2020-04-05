import crypto from 'crypto';
import connection from '../../database';

class OngController {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('hex');

    const response = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    if (!response) {
      return res.status(400).json({ error: 'error' });
    }

    return res.status(200).json({ id });
  }

  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    if (!ongs) {
      return res.status(400).json({ error: 'error' });
    }

    return res.status(200).json(ongs);
  }
}

export default new OngController();
