import mongoose from "mongoose";

async function connectDb() {
  const MONGODB_URI = process.env.NEXT_PRIVATE_MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI_ environment variable inside .env.local"
    );
  }

  let cached = global.mongoose;

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default { connectDb };
