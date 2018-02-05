module.exports = function(app, user, auth, asset) {
  app.get("/admin/add_asset", auth, (req, res) => {
    if (!req.user) {
      return res.redirect("/");
    } else {
      if (req.user.role == "admin") {
        res.render("add_asset", {
          user: req.user
        });
      }
    }
  });
};
