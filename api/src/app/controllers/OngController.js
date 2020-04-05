import crypto from 'crypto';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import connection from '../../database';

class OngController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).max(30).required(),
      whatsapp: Yup.string().min(8).max(15).required(),
      city: Yup.string().required(),
      uf: Yup.string().min(2).max(2),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

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
