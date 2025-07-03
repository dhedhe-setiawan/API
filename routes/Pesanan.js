import express from 'express';
import { getAll, get, post, patch, del, pay } from '../controllers/Pesanan.js';

const router = express.Router();

router.patch('/pay/:id', pay);

router.get('/', getAll);
router.get('/:id', get);
router.post('/', post);
router.patch('/:id', patch);
router.delete('/:id', del);

export default router;
