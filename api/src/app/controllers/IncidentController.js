import * as Yup from 'yup';
import connection from '../../database';

class IncidentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
      value: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data validation failed' });
    }

    const { title, description, value } = req.body;

    const ong_id = req.ongId;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    if (!id) {
      return res.status(400).json({ error: 'error' });
    }

    return res.status(200).json({ id });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    if (!incidents) {
      return res.status(400).json({ error: 'error' });
    }

    return res.status(200).json({ incidents });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.ongId;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  }
}

export default new IncidentController();
