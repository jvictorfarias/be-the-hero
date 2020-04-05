import connection from '../../database';

class IncidentController {
  async store(req, res) {
    const { title, description, value } = req.body;

    const ong_id = req.headers.authorization;

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
    const incidents = await connection('incidents').select('*');

    if (!incidents) {
      return res.status(400).json({ error: 'error' });
    }

    return res.status(200).json({ incidents });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

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
