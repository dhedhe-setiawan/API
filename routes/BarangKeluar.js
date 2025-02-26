import express from 'express';
import { getAll, get, post, patch, del } from '../controllers/BarangKeluar.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_bk', get);
router.post('/', post);
router.patch('/:id_bk', patch);
router.delete('/:id_bk', del);

export default router;
