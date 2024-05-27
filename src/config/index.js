export default {
    // mongoURI: process.env.MONGO_URI,
    port: process.env.PORT || 3000,
    store: process.env.SHOPIFY_STORE || 'https://bettergreens-3008.myshopify.com',
    apiKey: process.env.SHOPIFY_API_KEY || 'abc',
}