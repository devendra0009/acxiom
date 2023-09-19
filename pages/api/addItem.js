import dbConnect from '../../utils/dbConnect';
import Vendor from '../../utils/vendorModel';

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));
  if (req.method === 'POST') {
    try {
      const { pname, pprice, vendorId } = req.body;

      const vendor = await Vendor.findById(vendorId);
      if (!vendor) {
        return res.status(404).json({ msg: 'Vendor not found' });
      }
      const newItem = {
        pname,
        pprice,
      };
      vendor.items.push(newItem);

      // Save the vendor with the updated items array
      await vendor.save();
      return res.status(200).json({ msg: 'Item added successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    return res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
