import moongose from "mongoose";

export const connectDB = async () =>{
    await moongose.connect("mongodb+srv://saalimm64_db_user:tTzjnnaUMfk8A1Sl@cluster0.qkcqqd9.mongodb.net/Booking")
    .then(() => {
        console.log("DB CONNECTED")
    })
}