const todos = require("express").Router();
const Tasks = require("../models/Tasks");

todos.get("/", (req, res) => {
  Tasks.find((err, task) => {
    if (err) {
      res.send("Can't Load Todo");
    } else {
      res.json(task);
    }
  });
});

todos.post("/add", async (req, res) => {
  const task = new Tasks({
    taskname: req.body.taskname,
  });

  await task
    .save()
    .then((task) => res.json(task))
    .catch((err) => res.send("Can't add Todo"));
});

todos.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Tasks.findByIdAndRemove(id, (err, task) => {
    if (err) {
      res.send("Can't remove Todo");
    } else {
      res.json(task);
    }
  });
});

todos.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  Tasks.findByIdAndUpdate(id, { taskname: req.body.taskname }, (err, task) => {
    if (err) {
      res.send("Can't edit Todo");
    } else {
      res.json(task);
    }
  });
});

todos.get("/:id", (req, res) => {
  const id = req.params.id;
  Tasks.findById(id, (err, task) => {
    if (err) {
      res.send("Can't edit Todo");
    } else {
      res.json(task);
    }
  });
});

module.exports = todos;
