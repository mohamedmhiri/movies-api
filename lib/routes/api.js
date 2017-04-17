const express = require('express')
const router = express.Router()

/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200).json('api works')
})

module.exports = router
