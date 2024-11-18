import express from 'express';
import {
  getPets
} from '../controllers/petsController';

const router = express.Router();

router.get('/', getPets);

export default router;
