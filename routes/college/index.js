import express from 'express';
const router = express.Router();
import data from '../../data/data.js';

router.post('/', (req, res) => {
    const college = data.sort((a, b) => a.id - b.id);
    const newId = college[college.length - 1].id + 1;
    const newCollege = {
        id: newId,
        name: req.body.name,
        departments: req.body.departments,
        totalStudents: req.body.totalStudents,
        address: req.body.address,
    };
    data.push(newCollege);
    res.json({
        message: 'New college added successfully',
        newCollege
    });
});

router.get('/:id', (req, res) => {
    const college = data.find(college => college.id === parseInt(req.params.id));
    if (!college) {
        return res.status(404).send('The college with the given ID was not found.');
    }
    return res.json(college);
});

router.patch('/:id', (req, res) => {
    let college = data.find(college => college.id === parseInt(req.params.id));
    if (!college) {
        return res.status(404).send('The college with the given ID was not found.');
    }
    data.map(college => {
        if (college.id === parseInt(req.params.id)) {
            college.name = req.body.name;
            college.departments = req.body.departments;
            college.totalStudents = req.body.totalStudents;
            college.address = req.body.address;
        }
        return college;
    });
    res.json({
        message: 'College updated successfully',
        college
    });
});

router.delete('/:id', (req, res) => {
    const college = data.find(college => college.id === parseInt(req.params.id));
    if (!college) {
        return res.status(404).send('The college with the given ID was not found.');
    }
    const index = data.indexOf(college);
    data.splice(index, 1);
    return res.json({
        message: 'College deleted successfully',
        college
    });
});

export default router;