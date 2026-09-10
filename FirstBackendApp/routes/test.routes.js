const express = require('express');
const router = express.Router();


router.get('/test', (req, res)=>{
    res.send('test get router called')
})

router.post("/test", (req, res) => {
  res.send("test post router called");
});

router.put("/test/:id", (req, res) => {
  res.send("test put router called");
});

router.delete("/test/:id", (req, res) => {
  res.send("test delete router called");
});

module.exports = router;
