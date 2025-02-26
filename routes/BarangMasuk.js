import express from 'express';
import { getAll, get, post, patch, del } from '../controllers/BarangMasuk.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_bm', get);
router.post('/', post);
router.patch('/:id_bm', patch);
router.delete('/:id_bm', del);

export default router;
