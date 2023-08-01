const Users = require("../models/User.js");

async function getAllUsers() {
  const users = await Users.findAll();
  console.log("Passed through GetAllUsers service");
  return users;
}

async function getUser(id) {
  const user = await Users.findOne({
    where: {
      id: id,
    },
  });
  const userDataValues = user.dataValues;
  return userDataValues
}

async function insertUser(newuser) {
  const email = await Users.findOne({
    where:{
      email:newuser.email
    }
  })
  
  if(!email) {
    await Users.create(newuser)
  } else {
    const error = new Error ("Email already exists")
    error.status=409;
    throw error;  
  }
}

async function changeUser(changes, id) {
    await Users.update(changes, {
        where: {
          id:id
        }
      });

}

async function deleteUser(id) {
  await Users.destroy({
    where:{
      id:id
    }
  })
}

module.exports = {
  getAllUsers,
  getUser,
  insertUser,
  changeUser,
  deleteUser,
};
