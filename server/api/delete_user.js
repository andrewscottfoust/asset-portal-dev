module.exports = function(app, User, auth) {
  app.post("/api/delete_user", (req, res) => {
    User.findByIdAndRemove(req.body.id, (err, doc) => {
      if (err) {
        res.statusMessage = "User ID not found.";
        res.status(400).end();
      } else {
        return res.status(200).json({ message: "User was removed." });
      }
    });
  });
};
