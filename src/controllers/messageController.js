module.exports = {
  index(req, res, next){
    res.render("messages/index", {title: "Messages"});
  },

  new(req, res, next){
    res.render("messages/new", {title: "Contact Us"});
  }

}
