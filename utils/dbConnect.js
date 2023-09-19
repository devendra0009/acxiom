import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) return;
  console.log(process.env.NEXT_MONGO_URI);
  const db = await mongoose.connect('mongodb+srv://Dave:bedwaldevendra@cluster0.b4bciv6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log(db);
  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
