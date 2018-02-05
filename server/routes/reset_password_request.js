module.exports = function(app, user, auth) {
  app.get("/reset_password_request", function(req, res) {
    res.render("reset_password_request");
  });
};
