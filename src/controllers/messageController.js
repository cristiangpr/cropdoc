 const messageQueries = require("../db/queries.messages.js");

module.exports = {
  index(req, res, next){
    messageQueries.getAllMessages((err, messages) => {

//#3
        if(err){
          res.redirect(500, "static/index");
        } else {
          res.render("messages/index", {messages});
        }
      })
    },

  new(req, res, next){
    res.render("messages/new", {title: "Contact Us"});
  }

}
