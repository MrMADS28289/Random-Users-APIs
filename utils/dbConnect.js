const { MongoClient, ServerApiVersion } = require('mongodb');

function dbConnect() {

  // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f8jzprb.mongodb.net/?retryWrites=true&w=majority`;
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });


  console.log("DB connected!");
}

module.exports = dbConnect;