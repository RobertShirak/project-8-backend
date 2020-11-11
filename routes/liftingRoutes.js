const express = require('express')
const cors = require('cors')

const Lifting = require('../models/lifting.model')

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

//GETS -----------------------------
router.get('/', (req,res) => {
  Lifting.find({})
      .then((data)=> {
          res.json(data);
      })
})

//POSTS ----------------------------
router.post('/add', (req,res) => {
  var newLift = Lifting(req.body)
  newLift.save().then(()=> res.send("complete"))
})

//PUTS -----------------------------
router.put('/update/:id', (req,res) => {
  console.log(req.params.id)
  res.send(`updating document at ${req.params.id}`)
})

//DELETES --------------------------
router.delete('/delete/:id', (req,res) => {
  console.log(req.params.id)
  res.send(`deleting document at ${req.params.id}`)
})


module.exports = router