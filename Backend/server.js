const express = require('express');
const { chats } = require('../Data/data');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.get("/", (req, res) => {
    res.send("First Render");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    
    let id = req.params.id;
    const singleChat = chats.find( (chat) => chat._id === id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, function(err){
    if(err){
        console.log("Error while running post", err);
    }else{
        console.log(`Server running on post ${PORT}`);
    }
});