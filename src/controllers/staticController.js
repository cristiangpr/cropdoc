module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "The Crop Doctor"});
  }
}
