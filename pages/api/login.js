import User from '../../utils/userModel'
import Admin from '../../utils/adminModel'
import Vendor from '../../utils/vendorModel'
import dbConnect from '../../utils/dbConnect'

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));

  if (req.method === 'POST') {
    try {
      const { email, password, loginType } = req.body;

      let user;
      
      switch (loginType) {
        case 'admin':
          user = await Admin.findOne({ email });
          break;
        case 'vendor':
          user = await Vendor.findOne({ email });
          break;
        default:
          user = await User.findOne({ email });
      }

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      if (user.password !== password) {
        return res.status(401).json({ msg: 'Invalid password' });
      }

      return res.status(200).json({ msg: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}