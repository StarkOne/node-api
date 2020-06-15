const router = require('express').Router();
const {
  getBootcamps,
  getBootcamp,
  deleteBootcamp,
  updateBootcamp,
  createBootcamp,
} = require('../controllers/bootcamps');

router.get('/', getBootcamps);
router.get('/:id', getBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);
router.post('/', createBootcamp);

module.exports = router;
