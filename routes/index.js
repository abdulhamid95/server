const express = require('express');
const userController = require('../controller/userController');
const isLoggedIn = require('../middlewares/authentication');
const {userValidationRules, validate} = require('../middlewares/validtor')
const upload = require('../middlewares/upload')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "أهلًا بالعالم!"
    })
})

router.post('/account/register', userValidationRules(), validate, userController.register);
router.post('/account/login', userController.login);
router.get('/account/profile', isLoggedIn, userController.getProfile);
router.put('/account/profile/upload-photo', upload.single('avatar'), isLoggedIn, userController.uploadUserPhoto);



module.exports = router;