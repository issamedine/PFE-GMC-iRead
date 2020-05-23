const mongoose = require('mongoose')

// module.exports = db = () => mongoose.connect('mongodb://localhost:27017/projectDB',
//     { useNewUrlParser: true, useUnifiedTopology: true  })
//     .then(console.log('connected to db succcesfuly...'))
//     .catch(e => console.log(e))

  const db = mongoose.connect('mongodb://localhost:27017/projectDB',
    { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(console.log('connected to db succcesfuly...'))
    .catch(e => console.log(e))

    module.exports = db