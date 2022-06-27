import tasks from "../models/taskModel.js";

class TaskController {
  static getTask = (res) => {
    tasks.find((tasks) => {
      res.status(204).json(tasks);
    });
  };

  static getTaskById = (req, res) => {
    const id = req.params.id;

    tasks.findById(id, (err, tasks) => {
      if (err) {
        res
          .status(404)
          .send({ message: `${err.message} - Task was not found.` });
      } else {
        res.status(204).send(tasks);
      }
    });
  };

  static setTask = (req, res) => {
    let task = new tasks(req.body);

    task.save((err) => {
      if (err) {
        res
          .status(404)
          .send({ message: `${err.message} - Unable to register.` });
      } else {
        res.status(204).send(task.toJSON());
      }
    });
  };

  static updateTask = (req, res) => {
    const id = req.params.id;

    tasks.updateById(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(204).send({ message: "Updated sucessfully." });
      } else {
        res.status(404).send({ message: err.message });
      }
    });
  };

  static deleteTask = (req, res) => {
    const id = req.params.id;

    tasks.deleteById(id, (err) => {
      if (!err) {
        res.status(204).send({ message: "Deleted sucessfully" });
      } else {
        res.status(404).send({ message: err.message });
      }
    });
  };
}
