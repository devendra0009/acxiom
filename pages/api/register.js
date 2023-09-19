import User from '../../utils/userModel'
import Admin from '../../utils/adminModel'
import Vendor from '../../utils/vendorModel'
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));

  if (req.method === 'POST') {
    try {
      const { email, password, registerType, category } = req.body;
      console.log(req.body);

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: 'Email already exists' });
      }

      let user;

      switch (registerType) {
        case 'admin':
          user = new Admin({
            email,
            password,
            role:registerType
          });
          break;
        case 'vendor':
          user = new Vendor({
            email,
            password,
            category, 
            role:registerType
          });
          break;
        case 'user':
          user = new User({
            email,
            password,
            role:registerType
          });
          break;
        default:
          break;
      }

      await user.save();

      return res
        .status(200)
        .json({ msg: `${registerType} registered successfully` });
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
