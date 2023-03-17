const express = require('express');
const { chats } = require('../Data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("../Backend/middleware/errorMiddleware");
dotenv.config();
connectDB();
app.get("/", (req, res) => {
    res.send("First Render");
});

app.use(express.json());
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, function(err){
    if(err){
        console.log("Error while running post", err);
    }else{
        console.log(`Server running on post ${PORT}`);
    }
});