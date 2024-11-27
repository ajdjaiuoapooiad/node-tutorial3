const mongoose = require('mongoose')



const connectDB = (url) => {
    return mongoose.connect(url)
}

// mongoose
//     .connect(connectString)
//     .then(() => console.log('Db is connected .....'))
//     .catch((error) => console.log(error)
//     )


module.exports = connectDB;