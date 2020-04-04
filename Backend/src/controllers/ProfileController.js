import Spot from '../models/Spot';

import User from '../models/User';

class ProfileController {
  async index(req, res) {
    const { user_id } = req.headers;

    const checksUser = await User.findById(user_id);

    if (!checksUser) {
      return res.status(400).json({ error: 'User does not exists' });
    }
    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}

export default new ProfileController();
