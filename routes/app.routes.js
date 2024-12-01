module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  app.get("/get-all", App.findAll);
  //http://localhost:8081/message/674be83df605451b8cccbbf5
  app.get("/message/:messageId", App.findOne);
  app.post("/create", App.create);
  //http://localhost:8081/update/674c1a9531279eed93df6119
  app.put("/update/:messageId", App.update);
  //http://localhost:8081/delete/674c1a9531279eed93df6119
  app.delete("/delete/:messageId", App.delete);
  //http://localhost:8081/find/difficulty
  app.get("/find/difficulty", App.finddifficulty);
  app.delete("/deleteAll", App.deleteAll);
};
