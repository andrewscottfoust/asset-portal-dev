module.exports = function(app, user, auth) {
  app.get("/login", auth, (req, res) => {
    if (req.user) return res.redirect("/");
    res.render("login");
  });
};
