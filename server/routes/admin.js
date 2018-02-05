let users;
let assets;

module.exports = function(app, User, auth, Asset) {
  app.get("/admin", auth, (req, res) => {
    let isAdmin = false;

    if (!req.user) {
      return res.redirect("/");
    } else {
      if (req.user.role == "admin") {
        isAdmin = true;
      }

      User.find(function(err, allUsers) {
        if (err) {
          return console.error(err);
        } else {
          users = allUsers;
          Asset.find(function(err, allAssets) {
            if (err) {
              return console.error(err);
            } else {
              assets = allAssets;
              res.render("admin", {
                isAdmin: isAdmin,
                users: users,
                user: req.user,
                assets: assets
              });
            }
          }).sort({type: 1});
        }
      });
      
    }
  });
};
