module.exports = function(app, user, auth, Asset) {
  app.post("/api/add_asset", (req, res) => {
    const asset = new Asset(req.body);
    console.log(req.body);
    asset.save((err, doc) => {
      if (err) {
        res.statusMessage = "Asset was not added!";
        res.status(400).end();
      } else {
        return res
          .status(200)
          .json({ message: "Asset was successfully added!" });
      }
    });
  });
};
