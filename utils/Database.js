import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);

  if (isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shar_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    isConnected = true;
    console.log("New connectio created");
  } catch (error) {
    console.log(error);
   
  }
};
