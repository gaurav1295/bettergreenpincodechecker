import express from 'express'
const router = express.Router();
import { getAll, checkPincode } from '../pincode-fetcher/controller/index.js'

router.get('/', getAll);
router.post('/', checkPincode);
// router.post('/', userController.createUser);

export default router;