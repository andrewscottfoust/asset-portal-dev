module.exports = function(app, User, auth) {
  app.post("/api/register", (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) {
        res.statusMessage = "Registration failed!";
        res.status(400).end();
      } else {
        user.generateToken((er, user) => {
          if (err) return res.status(400).send(err);
          res.cookie("auth", user.token).send("ok");
        });
      }
    });
  });
};
