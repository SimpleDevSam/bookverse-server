const Comments = require("../models/Comments");
const Users = require("../models/User.js");

async function GetAllComments() {
  const comments = await Comments.findAll();
  return comments;
}

async function GetCommentsByBook(id) {
  Users.hasMany(Comments);
  Comments.belongsTo(Users);

  const commentsTry = await Comments.findAll({
    include: { model: Users, required: true },
    where: { bookid: id },
  });

  return commentsTry;
}

async function GetCommentById(id) {
  const comment = await Comments.findOne({
    where: {
      id: id,
    },
  });
  const commentDataValues = comment.DataValues;
  return commentDataValues;
}

async function InsertComment(newComment) {
  await Comments.create(newComment);
}

async function RemoveComment(id) {
  await Comments.destroy({
    where: {
      id: id,
    },
  });
}

async function changeComment(changes, id) {
    await Books.update(changes, {
        where: {
          id:id
        }
      });

}

module.exports = {
  GetAllComments,
  GetCommentsByBook,
  InsertComment,
  GetCommentById,
  RemoveComment,
  changeComment
};
