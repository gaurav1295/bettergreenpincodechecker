// import axios from 'axios'
// import '@shopify/shopify-api/adapters/node';
// import { shopifyApi } from '@shopify/shopify-api'
import 'dotenv/config';
import {createAdminRestApiClient} from '@shopify/admin-api-client';

const { 
    // SHOPIFY_API_KEY, 
    // SHOPIFY_API_SECRET_KEY, 
    SHOPIFY_ACCESS_TOKEN, 
    SHOPIFY_STORE, 
} = process.env;

const client = createAdminRestApiClient({
    storeDomain: SHOPIFY_STORE,
    apiVersion: '2024-07',
    accessToken: SHOPIFY_ACCESS_TOKEN,
  });

export const getAll = async (req, res, next) => {
    try {
        const response = await client.get('locations');

        if (response.ok) {
            const body = await response.json();
            const locations = body.locations;
            const pincodes = locations.map(location => location.zip);
            res.json(pincodes);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).send('Error fetching locations');
      }
}

export const checkPincode = async (req, res, next) => {
  try {
    const { pincode } = req.body;
    const response = await client.get('locations');

    if (response.ok) {
        const body = await response.json();
        const locations = body.locations;
        const pincodes = locations.map(location => location.zip);
        const isAvailable = pincodes.includes(pincode);
        res.json({
            available: isAvailable
        });
    }
  } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).send('Error fetching locations');
  }
}

export default { }


