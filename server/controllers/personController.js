const Person = require("../models/Event-model-person");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const PersonController = {};

module.exports = personController = {
  //loading
  authUser: async (req, res) => {
    try {
      const user = await Person.findById(req.user.id).select("-password");
      res.send({
        person: user,
        role: user.role,
      });
    } catch (err) {
      res.status(500).send("Server error !!!");
    }
  },
  signup: async (req, res) => {
    const { name, age, adresse, email, tel, image, password, role } = req.body;

    const mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if (!mail.test(email)) return res.status(403).send({ message: "email invalid" });

    if (password.length < 6) return res.status(403).send({ message: "password invalid" });

    try {
      let newPerson = new Person({
        name,
        age,
        adresse,
        email,
        tel,
        image,
        password,
        role,
      });

      const salt = await bcrypt.genSalt(10);
      newPerson.password = await bcrypt.hash(password, salt);

      await newPerson.save();

      const personModel = {
        id: newPerson._id,
        name: newPerson.name,
        email: newPerson.email,
        role: newPerson.role,
      };

      const token = await jwt.sign({ personModel }, "mySecret"); // generation du token

      res.send({
        person: {
          _id: newPerson._id,
          name: newPerson.name,
          email: newPerson.email,
          role: newPerson.role,
          age: newPerson.age,
          adresse: newPerson.adresse,
          tel: newPerson.tel,
          image: newPerson.image,
        },
        token: `Bearer ${token}`,
      });

      // res.send({ msg: "Register success" });

      // bcrypt.genSalt(10, (err, salt) => {
      //   if (err) throw err;
      //   bcrypt.hash(password, salt, async (err, hash) => {
      //     if (err) throw err;
      //     newPerson.password = hash
      //     try {
      //       const addR = await newPerson.save()
      //       res.send(addR)
      //     } catch (error) {
      //       console.error(error)
      //     }
      //   })
      // })
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error server" });
    }
  },

  login: async (req, res) => {
    try {
      const userFind = await Person.findOne({ email: req.body.email });
      if (!userFind) return res.status(403).send({ message: "user not found" });

      const isMatch = await bcrypt.compare(
        req.body.password,
        userFind.password
      ); //return boolean

      if (!isMatch)
        return res.status(402).send({ message: "Password invalid" });

      const userModel = {
        id: userFind._id,
        email: userFind.email,
        name: userFind.name,
      };

      const token = await jwt.sign(userModel, "mySecret"); // generation du token

      res.send({
        // person: userModel,
        person: {
          _id: userFind._id,
          name: userFind.name,
          email: userFind.email,
          age: userFind.age,
          adresse: userFind.adresse,
          tel: userFind.tel,
          image: userFind.image,
        },
        role: userFind.role,
        message: "you are sigin",
        token: `Bearer ${token}`,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msgs: error });
    }
  },
  // Admin
  adminDashboard: async (req, res) => {
    try {
      await res.json({ user: req.user, msg: "Success Test hello" });
    } catch (error) {
      res.status(500).send({ msgs: "test error" });
    }
  },
  //Author
  authorDashboard: async (req, res) => {
    try {
      // await res.json(req.user);
      await res.send("Dashboard author");
    } catch (error) {
      res.status(500).json({ msgs: error });
    }
  },
  authorProfile: async (req, res) => {
    try {
      // await res.json(req.user);
      await res.send("Profile author success");
    } catch (error) {
      res.status(500).json({ msgs: error });
    }
  },
  getAllContact: async (req, res) => {
    const id = req.params.id;
    try {
      const contactFind = await Person.find();
      res.send(contactFind);
    } catch (error) {
      res.status(500).json({ msgs: error });
    }
  },
  updateProfileAuthor: async (req, res) => {
    try {
      // update({ Employeeid: 1 }, { $set: { EmployeeName: "NewMartin" } });

      // const profile = await Person.findByIdAndUpdate(
      //   { _id: req.params.id },
      //   {
      //     $set: req.body,
      //   }
      // );
      const profile = await Person.update(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      const newP = await Person.findOne({ _id: req.params.id });
      console.log("newP", newP);
      res.send(newP);
    } catch (error) {
      res.status(500).json({ msgs: error });
    }
  },

  //User
  userProfile: async (req, res) => {
    try {
      await res.json(req.user);
    } catch (error) {
      res.status(500).json({ msgs: error });
    }
  },
  books: async (req, res) => {
    try {
      res.json(req.user);
    } catch (error) {
      console.log("error.message", error.message);
      res.status(500).json({ msgs: error });
    }
  },
};

/* 

req = {
  ..info,
  headers{
    ...
  }
}

=> passport 

headers.authurization 

req = {...req , user :{...user(token decodé)}}

//check to the request 
//give a response 




*/
