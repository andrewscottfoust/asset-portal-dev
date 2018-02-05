module.exports = function(app, User, auth, Asset) {
  app.post("/api/delete_asset", (req, res) => {
    Asset.findByIdAndRemove(req.body.id, (err, doc) => {
      if (err) {
        res.statusMessage = "Asset not found.";
        res.status(400).end();
      } else {
        return res.status(200).json({ message: "Asset was removed." });
      }
    });
  });
};
