const {getAllUsers,getUser, insertUser,changeUser,deleteUser} = require("../services/user.js");

async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    console.log("passed by getUsers controller");
    res.send(users);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

async function getuserById(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const user = await getUser(id);
      res.send(user);
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {

    res.status(500);
    res.send(error.message);
    }
}

async function postUser(req, res) {
  try {
    const newUser = req.body;
    if (req.body.name) {
      await insertUser(newUser);
      res.status(200);
      res.send("User added succesfully");
    } else {
      res.status(422);
      res.send("Name field is mandatory");
    }
  } catch (error) {
    if(error.status === 409) {
      res.status(409);
      res.send(error.message);
    } else {
      res.status(500);
      res.send("Internal Server Error");
    }
  }
}

async function patchUser(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;
      await changeUser(body, id);
      res.status(201);
      res.send("User modified succesfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function removeUser(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deleteUser(id);
      res.status(201);
      res.send("User deleted succesfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getUsers,
  getuserById,
  postUser,
  patchUser,
  removeUser,
};
