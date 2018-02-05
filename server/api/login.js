module.exports = function(app, User, auth) {
  app.post("/api/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        res.statusMessage = "Auth failed, wrong email";
        res.status(400).end();
      } else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          if (!isMatch)
            return res
              .status(400)
              .json({ message: "Auth failed, wrong password" });

          user.generateToken((er, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("auth", user.token).send("ok");
          });
        });
      }
    });
  });
};
