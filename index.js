// const express = require("express");
// const app = express();
// const port = 3000;

// const cors = require("cors");
// app.use(cors());

// const bodyParser = require("body-parser");

// const { MongoClient, ObjectId } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri =
//   "mongodb+srv://1995510:dbtest@cluster0.5c3wzxp.mongodb.net/?retryWrites=true&w=majority";

// // parse application/json
// app.use(bodyParser.json());

// // DISPLAYING EVENT
// app.get("/", (req, res) => {
//   const client = new MongoClient(uri);
//   async function run() {
//     try {
//       const database = client.db("events");
//       const event = database.collection("event");

//       const result = await event.find({}).toArray();
//       console.log(result);
//       res.send(result);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
// });

// // ADDING EVENT
// app.post("/", (req, res) => {
//   console.log(req.body);
//   const client = new MongoClient(uri);
//   async function run() {
//     try {
//       const database = client.db("events");
//       const event = database.collection("event");

//       const result = await event.insertOne(req.body);
//       console.log(result);
//       res.send(result);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
// });

// // DELETE EVENT
// app.delete("/:eventId", (req, res) => {
//   const eventId = req.params.eventId;
//   const client = new MongoClient(uri);
//   async function run() {
//     try {
//       const database = client.db("events");
//       const event = database.collection("event");

//       const result = await event.deleteOne({ _id: ObjectId(eventId) });
//       console.log(result);
//       res.send(result);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
// });

// app.use(express.static(__dirname + "/public"));

// app.use((req, res, next) => {
//   res.status(404).sendFile(__dirname + "/public/404.html");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
