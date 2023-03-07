import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("DB에 커넥팅 성공 !!!");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
