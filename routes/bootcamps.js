const router = require('express').Router();
const {
    getBootcamps,
    getBootcamp,
    deleteBootcamp,
    updateBootcamp,
    createBootcamp,
    getBootcampsInRadius
} = require('../controllers/bootcamps');

router.get('/radius/:zipcode/:distance', getBootcampsInRadius);

router.get('/', getBootcamps);
router.get('/:id', getBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);
router.post('/', createBootcamp);

module.exports = router;
