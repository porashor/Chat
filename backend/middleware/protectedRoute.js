import jwt from "jsonwebtoken";
export const protectedRoute = (req, res, next) => {
   const token = req.cookies?.token;

  try {
    if (!token || typeof token !== "string" || token.length === 0) {
    return res.status(401).send("Unauthorized: No token provided");
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.email = decoded.email;
    if (decoded) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  }
  } catch (error) {
    console.log(error);
  }
};