export const verifyJobGood = (req, res, next) => {
  if (
    req.user.user_type !== "IntelligenceCorpsUser" &&
    req.user.user_type !== "AirForceUser" &&
    req.user.user_type !== "AdministratorUser"
  ) {
    return res.status(403).json("you not have job");
  }
  next();
};
export const justAdmin = (req, res, next) => {
  if (req.user.user_type !== "AdministratorUser") {
    return res.status(403).json("you not Administrator");
  }
  next();
};
export const verifyCanChanges = (req, res, next) => {
  if (
    req.user.user_type !== "IntelligenceCorpsUser" &&
    req.user.user_type !== "AdministratorUser"
  ) {
    return res.status(403).json("you not denided to this page");
  }
  next();
};
