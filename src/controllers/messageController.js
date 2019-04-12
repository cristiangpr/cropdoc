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
  },

  create(req, res, next){
   let newMessage = {
     name: req.body.name,
     content: req.body.content,
     email: req.body.email,
     phone: req.body.phone
   };
   messageQueries.addMessage(newMessage, (err, message) => {
     if(err){
       res.redirect(500, "/messages/new");
     } else {
       res.redirect(303, `/messages/${message.id}`);
     }
   });
 },
 show(req, res, next){

//#1
   messageQueries.getMessage(req.params.id, (err, message) => {

//#2
     if(err || message == null){
       res.redirect(404, "/");
     } else {
       res.render("messages/show", {message});
     }
   });
 }

}
