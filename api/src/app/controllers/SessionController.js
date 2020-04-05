import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import connection from '../../database';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).max(30),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }
    const { email, password } = req.body;

    const ong = await connection('ongs')
      .where('email', email)
      .select('id', 'name', 'password_hash')
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'Ong not found' });
    }

    const authenticated = await bcrypt.compare(password, ong.password_hash);

    if (!authenticated) {
      return res.status(401).json({ error: 'Credentials incorrect' });
    }

    const { id, name } = ong;

    return res.status(200).json({
      ong: {
        id,
        email,
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
