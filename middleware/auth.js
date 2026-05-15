import HttpError from "../middleware/HttpError.js";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    console.log("HEADER:", authHeader);

    if (!authHeader) {
      return next(new HttpError("authorization header is required", 400));
    }
    const token = authHeader.replace("Bearer ", "");
    
    console.log("TOKEN:", token);

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODE:", decode);

    const user = await User.findOne({ _id: decode._id, "tokens.token": token });

    console.log("USER:", user);

    if (!user) {
      return next(new HttpError("plz authentication", 401));
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    next(new HttpError("plz authentication", 401));
  }
};
export default auth;
