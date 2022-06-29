import express from "express"
import mongoose from "mongoose";  
import dotenv from "dotenv"  
import cors from "cors"    
import userRoute from "./routes/userRoute.js"

dotenv.config(); // it makes the possibility to connect the .env file data to server.js
const app = express();
app.use(cors(), express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.use("/", userRoute );

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Database connected and server running on port: `, PORT),
    ),
  )
  .catch((error) => console.log(error));






         



//


