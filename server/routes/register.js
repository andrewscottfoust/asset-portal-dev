module.exports = function(app, user, auth) {
  app.get("/register", auth, (req, res) => {
    if (req.user) return res.redirect("/");
    res.render("register");
  });
};
