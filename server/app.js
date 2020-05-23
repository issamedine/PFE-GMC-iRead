const express = require("express");
const app = express();
const db = require("./config/database");
const Chat = require("./models/Event-model-chat");

// db();

app.use(express.static("node_modules"));
app.use(express.json());

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("Input Chat Message", (msg) => {
    db.then((db) => {
      try {
        let chat = new Chat({
          message: msg.chatMessage,
          sender: msg.userId,
          type: msg.type,
        });

        chat.save((err,doc)=>{
          if(err) return resizeBy.json({success: false, err})

          Chat.find({ _id: doc._id})
          .populate("sender")
          .exec((err, doc)=> {
            return io.emit("Output Chat Message", doc)
          })
        })
      } catch (error) {
        console.log(error)
      }
    });
  });
});

const RouteEvents = require("./routes/route-event");
app.use("/", RouteEvents);

const BooksRouteEvents = require("./routes/books-route-events");
app.use("/books", BooksRouteEvents);

const ChatRouteEvents = require("./routes/chats-route-event");
app.use("/", ChatRouteEvents);

server.listen(5000, () => {
  console.log(" app is wokring on port 5000");
});
