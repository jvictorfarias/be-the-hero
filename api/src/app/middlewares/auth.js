import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // Callback to async/await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' '); // Only token, not bearer

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.ongId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
