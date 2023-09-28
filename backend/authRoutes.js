const express = require('express');
const router = express.Router();

router.post('/creatAccount', (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({ message: 'Account Created Successfully'});

});

module.exports = router;