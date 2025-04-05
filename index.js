const Vendor = require('../models/Vendor');
 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcryptjs');
 const dotEnv = require('dotenv');
 
 dotEnv.config();
 
 const secretKey = process.env.WhatIsYourName
 
 
 
 
 const PORT = process.env.PORT || 4000;
 
 dotEnv.config();
 app.use(cors())
 
 mongoose.connect(process.env.MONGO_URI)
     .then(() => console.log("MongoDB connected successfully!"))
     .catch((error) => console.log(error))
 
 app.use(bodyParser.json());
 app.use('/vendor', vendorRoutes);
 app.use('/firm', firmRoutes)
 app.use('/product', productRoutes);
 app.use('/uploads', express.static('uploads'));
 
 app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`);
});

app.use('/', (req, res) => {
    res.send("<h1> Welcome to SUBY");
})