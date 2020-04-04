import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    const checksUser = await User.findOne({ email });

    if (checksUser) {
      return res.json(checksUser);
    }

    const user = await User.create({ email });

    return res.json(user);
  }
}

export default new SessionController();
