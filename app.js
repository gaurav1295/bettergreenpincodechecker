// import config from 'dotenv'
import express from 'express'
import pincodeRoutes from './src/routes/pincode-fetcher/index.js'
import '@shopify/shopify-api/adapters/node';
// import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import 'dotenv/config';

// config.config()

// require('dotenv').config();

const { 
    // SHOPIFY_API_KEY, 
    // SHOPIFY_API_SECRET_KEY, 
    // SHOPIFY_ACCESS_TOKEN, 
    // SHOPIFY_STORE, 
    PORT
} = process.env;

const app = express();

// Middleware
app.use(express.json());

// const shopify = shopifyApi({
//     // The next 4 values are typically read from environment variables for added security
//     apiKey: process.env.SHOPIFY_API_KEY,
//     apiSecretKey: process.env.SHOPIFY_API_SECRET,
//     scopes: ['write_locations, read_locations'],
//     hostName: HOST_NAME,
// });


// Routes
app.use('/api/pincode', pincodeRoutes);

// Error handling middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
