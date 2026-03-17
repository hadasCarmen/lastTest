import jwt from 'jsonwebtoken'

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header required" });
  }

  const token = authHeader.split(" ")[1];

  
  
  
  try {
    console.log("Sending token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
