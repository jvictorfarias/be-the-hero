import crypto from 'crypto';
import bcrypt from 'bcrypt';
import connection from '../../database';

class OngController {
  async store(req, res) {
    const { name, email, password, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('hex');

    const password_hash = await bcrypt.hash(password, 8);

    const response = await connection('ongs').insert({
      id,
      name,
      email,
      password_hash,
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
