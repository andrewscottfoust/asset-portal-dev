module.exports = function(app, user, auth) {
  app.get("/logout", auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        res.redirect("/");
        console.log("You are now logged out!");
      }
    });
  });
};
