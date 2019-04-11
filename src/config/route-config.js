module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const blogRoutes = require("../routes/blog");
    const contactRoutes = require("../routes/contact");
        const calendarRoutes = require("../routes/calendar");

    app.use(calendarRoutes);
    app.use(contactRoutes);
    app.use(blogRoutes);
    app.use(staticRoutes);
  }
}
