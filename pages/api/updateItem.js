import dbConnect from '../../utils/dbConnect';
import Vendor from '../../utils/vendorModel';

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));

  if (req.method === 'PUT') {
    try {
      const { vendorId, editedName, editedPrice, prevName, prevPrice } = req.body;

      const updateResult = await Vendor.updateOne(
        { _id: vendorId, 'items.pname': prevName, 'items.pprice': prevPrice },
        { $set: { 'items.$.pname': editedName, 'items.$.pprice': editedPrice } }
      );

      if (updateResult.nModified === 0) {
        return res.status(404).json({ msg: 'Item not found or not updated' });
      }

      return res.status(200).json({ msg: 'Item updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    return res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
