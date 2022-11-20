import express from 'express';
const router = express.Router();
import data from '../data/data.js';
import collegeRouter from './college/index.js';


router.get('/', (req, res) => {
    res.send('welocme to the project of st1-bee');
})

router.get('/colleges', (req, res) => {
    const colleges = data.map(college => {
        return {
            id: college.id,
            name: college.name,
            address: college.address,
        }
    });
    res.json(colleges);
})

router.use('/college', collegeRouter);

export default router;