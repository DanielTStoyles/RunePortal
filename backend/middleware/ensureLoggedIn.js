/** @format */

const ensureLoggedIn = (req, res, next) => {
  // console.log("Session data:", req.session);
  if (!req.session.user || !req.session.user.id) {
    return res.status(401).json({ message: "User isn't logged in" });
  }
  next();
};

export default ensureLoggedIn;
