import dbConnect from '../../utils/dbConnect';
import Vendor from '../../utils/vendorModel';

export default async function handler(req, res) {
  await dbConnect().catch((err) => res.json({ msg: 'Connection Failed!!' }));
    if(req.method==='GET')
    {
        try {
            const { vendorId } = req.query;
    //   console.log(vendorId, req.params);
            const vendor = await Vendor.findById(vendorId);
      
            if (!vendor) {
              return res.status(404).json({ msg: 'Vendor not found' });
            }
      
            return res.status(200).json({ msg: 'Item found successfully', vendor });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'An Internal Server Error Occurred' });
          }
        } else {
          return res.status(405).json({ msg: 'Method Not Allowed' });
        }
      }