const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");

const Person = require("../models/Event-model-person");
const secretOrKey = "mySecret";
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extract token pour le tester
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    //jwtPayload: jwtFromRequest
    try {
      const per = await Person.findById(jwtPayload.id);
      // if (per.role === "admin") {
      //     return done(null, 'hello admin')
      // }
      const modelPer = {
        id: per._id,
        name: per.name,
        email: per.email,
        role: per.role,
      };
      if (modelPer) {
        return done(null, modelPer);
      } else {
        return done(null, false);
      }
    } catch (err) {
      // return done(err, false);
      console.log("catch passport");
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false }); // session : validité token  jwt: strategie utilisé

// passport.use('local.loginAdmin', new JwtStrategy(opts, async (jwtPayload, done) => {
//     try {
//         const administrator = await Person.findById(jwtPayload._id)
//         if (administrator.role === "admin") {
//             return done(null, 'admin')
//         } else {
//             return done(null, false)
//         }
//     } catch (e) {
//         return done(err, false)
//     }
// }))

// passport.use('local.signupAuthor', new localStrategy(config, async (jwtPayload, done) => {
//     try {
//         const author = await author.findById(jwtPayload._id)
//         if (author) {
//             return done(null, author)
//         } else {
//             return done(null, false)
//         }
//     } catch (e) {
//         return done(err, false)
//     }
// }))

// passport.use('local.loginAuthor', new localStrategy(config, async (jwtPayload, done) => {
//     try {
//         const author = await author.findById(jwtPayload._id)
//         if (author) {
//             return done(null, author)
//         } else {
//             return done(null, false)
//         }
//     } catch (e) {
//         return done(err, false)
//     }
// }))

// passport.use('local.signupUser', new localStrategy(config, async (jwtPayload, done) => {
//     try {
//         const user = await user.findById(jwtPayload._id)
//         if (user) {
//             return done(null, user)
//         } else {
//             return done(null, false)
//         }
//     } catch (e) {
//         return done(err, false)
//     }
// }))

// passport.use('local.loginUser', new localStrategy(config, async (jwtPayload, done) => {
//     try {
//         const user = await user.findById(jwtPayload._id)
//         if (user) {
//             return done(null, user)
//         } else {
//             return done(null, false)
//         }
//     } catch (e) {
//         return done(err, false)
//     }
// }))
