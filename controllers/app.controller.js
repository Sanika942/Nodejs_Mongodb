const App = require("../models/app.model.js");

exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};

exports.findOne = (req, res) => {
  App.findById(req.params.messageId).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Message not found with id " + req.params.messageId,
      });
    }
    res.send(data);
  });
};

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "content cannot be empty",
    });
    return;
  }
  const messages = new App({
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    difficulty: req.body.difficulty,
  });
  messages
    .save(messages)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while creating",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty",
    });
  }
  const id = req.params.messageId;
  App.findByIdAndUpdate(id, req.body, {
    new: true,
    runvalidators: true,
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Dtat not found with id " + id,
        });
      } else res.send({ message: "update successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error updating with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  App.findByIdAndDelete(req.params.messageId).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Data not found with id" + req.params.messageId,
      });
    }
    res.send({ message: "Data deleted successfully" });
  });
};

//find by difficulty:"easy"
exports.finddifficulty = (req, res) => {
  App.find({ difficulty: "easy" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while extracting",
      });
    });
};

exports.deleteAll = (req, res) => {
  App.deleteMany({})
    .then((data) => {
      res.send({
        message: `All tours were deleted`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};
