import users from "../models/userModel.js";

class UserController {
  static getUser = (res) => {
    users.find((users) => {
      res.status(200).json(users);
    });
  };

  static getUserById = (req, res) => {
    const id = req.params.id;

    users
      .findById(id)
      //.populate('name', 'cpf')
      .exec((err, users) => {
        if (err) {
          res.status(404).send({
            message: `${err.message} - Error 404, user was not found`,
          });
        } else {
          res.status(200).send(users);
        }
      });
  };

  static setUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - Error when registering the user.`,
        });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.updateById(id, { $set: req.body }, (err) => {
      if (!err) {
        res
          .status(204)
          .send({ message: "The user has been successfully updated." });
      } else {
        res.status(404).send({ message: "Unable to update user" });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;

    livros.deleteById(id, (err) => {
      if (!err) {
        res.status(204).send({ message: "The user was deleted successfully" });
      } else {
        res.status(404).send({ message: "Unable to remove user" });
      }
    });
  };
}

export default UserController;
