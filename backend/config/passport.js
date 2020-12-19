import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import keys from "./keys.js";
import User from "../models/User.js";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

const passportConfig = (passport) => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, use);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
export default passportConfig;
