import express from 'express';
import apiRoutes from './api.js';

const router = express.Router();

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.send('API está rodando 🚀');
});

export default router;