import express from 'express';
import { getAll, get, post, patch, del } from '../controllers/Pegawai.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_pegawai', get);
router.post('/', post);
router.patch('/:id_pegawai', patch);
router.delete('/:id_pegawai', del);

export default router;
