import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

// normally here would be the body parser middleware but it's build in from express 4.16 on
// the others may be needed in the future
/* app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
 */

//cors
/* app.use(
    cors({
      credentials: true,
    })
  ); */

// this is for handling cors issues
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//testing if the app works
app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "API is working :)" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
