const jwt = require("jsonwebtoken");

const secretkey = "01101996_Oct";

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["auth-token"];
  console.log(bearerHeader);
  if ( bearerHeader !== "" && bearerHeader !==  undefined ) {
    req.token = bearerHeader;
    jwt.verify(req.token, secretkey, async (error, authData) => {
      if (error) {
        res.status(401).json("Access denied");
      } else {
        next();
      }
    });
  } else {
    res.status(498).json("Require Token");
  }
};

module.exports = {verifyToken,secretkey};