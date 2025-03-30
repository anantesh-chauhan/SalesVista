import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';


// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
// import {
//   dataUser,
//   dataProduct,
//   dataProductStat,
//   dataTransaction,
//   dataOverallStat,
//   dataAffiliateStat,
// } from "./data/index.js";

import {
    user , 
    dataProduct ,
    dataProductStat ,
    dataTransaction ,
    dataAffiliateStat ,
    dataOverallStat ,     
} from "./data/newData.js"

// Configurations
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes (Fixed: Added `/` to each route)
app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 9000;

// console.log("MongoDB URL:", process.env.MONGO_URL);
// console.log(`Port: ${PORT}`);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("✅ Connected to MongoDB Atlas successfully!");
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
    // Product.insertMany(dataProduct);

    // ProductStat.insertMany(dataProductStat); 
    
    // Transaction.insertMany(dataTransaction) ;
    
    // User.insertMany(user);   //used it only once to avoid duplicate data in db
    //   It adds data only once to db to avoid duplicates
})
.catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
});
