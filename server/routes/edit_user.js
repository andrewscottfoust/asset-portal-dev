module.exports = function(app, User, auth) {
  app.get("/admin/edit_user/:id", auth, (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id, (err, user) => {
      if (!req.user) {
        return res.redirect("/");
      } else {
        if (req.user.role == "admin") {
          res.render("edit_user", {
            user: user
          });
        }
      }
    });
  });
};
