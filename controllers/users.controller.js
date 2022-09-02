const users = require('../public/data.json');

module.exports.getRandomUser = (req, res, next) => {
  var randomUser = users[Math.floor(Math.random() * users.length)];
  res.json(randomUser);
};

module.exports.getAllUsers = (req, res, next) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};

// module.exports.saveATool = (req, res) => {
//   console.log(req.query);
//   tools.push(req.body);
//   res.send(tools);
// };

// module.exports.getToolDetail = (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   // const filter = {_id: id};
//   const foundTool = tools.find(tool => tool.id === Number(id));
//   res.status(200).send({
//     success: true,
//     messages: "Success",
//     data: foundTool
//   });
//   // res.status(500).send({
//   //   success: false,
//   //   error: "Internal server error."
//   // });
// };

// module.exports.updateTool = (req, res) => {
//   // const newData = req.body;
//   const { id } = req.params;
//   const filter = { _id: id };

//   const newData = tools.find(tool => tool.id === Number(id));

//   newData.id = id;
//   newData.name = req.body.name;

//   res.send(newData);

// };

// module.exports.deleteTool = (req, res) => {
//   const { id } = req.params;
//   const filter = { _id: id };

//   tools = tools.filter(tool => tool.id !== Number(id));

//   res.send(tools);
// };