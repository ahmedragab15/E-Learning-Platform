import jwt from "jsonwebtoken";

export const generateJWT = (jwtPayload: JwtPayload) => {
  const secretKey = process.env.JWT_SECRET_KEY as string;
  const token = jwt.sign(jwtPayload, secretKey, { expiresIn: "10d" });
  return token;
};