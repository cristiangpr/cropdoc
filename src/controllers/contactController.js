module.exports = {
  form(req, res, next){
    res.render("contact/form", {title: "Contact Us"});
  }

}
