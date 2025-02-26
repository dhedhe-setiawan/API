import express from 'express';
import { getAll, get, post, patch, del } from '../controllers/Barang.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_barang', get);
router.post('/', post);
router.patch('/:id_barang', patch);
router.delete('/:id_barang', del);

export default router;
