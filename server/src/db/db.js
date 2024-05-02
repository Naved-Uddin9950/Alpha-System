import mongoose from 'mongoose';

const DB_URI = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'alphasystem_dev';

export const connectDB = async () => {
  try {
      await mongoose.connect(`${DB_URI}/${DB_NAME}`);
      console.log('Database connected !!!');
  } catch (error) {
      console.error(`\n MongoDB Connection Error : ${error}`);
      process.exit(1);
  }
}