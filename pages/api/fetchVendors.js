// pages/api/getAllVendors.js
import dbConnect from '../../utils/dbConnect';
import Vendor from '../../utils/vendorModel';

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));

  if (req.method === 'GET') {
    try {
      const vendors = await Vendor.find({});
      return res.status(200).json({ vendors });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    return res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
