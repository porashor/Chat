import jwt from "jsonwebtoken";
export const protectedRoute = (req, res, next) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    req.email = decoded.email;
    if(decoded){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
}