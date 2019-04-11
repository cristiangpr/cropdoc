const Message = require("./models").Message;

module.exports = {

//#1
  getAllMessages(callback){
    return Message.findAll()

//#2
    .then((messages) => {
      callback(null, messages);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
