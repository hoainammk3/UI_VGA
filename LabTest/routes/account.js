const express = require('express');
const router = express.Router();
const { signUpController } = require('../controllers/signUpController');
const { loginController } = require('../controllers/loginController');
const { sendMailController } = require('../controllers/sendMailController');
const {ggLoginController, ggCallbackController, ggInfor} = require('../controllers/ggLoginController')
const {deleteAccount} = require('../controllers/deleteAccount')

router.post('/login', loginController);
router.post('/signup', signUpController);
router.post('/send-email', sendMailController);
router.post('/delete', deleteAccount);


// Đăng nhập bằng tài khoản Google
router.get('/auth/google', ggLoginController);

// Xử lý callback sau khi đăng nhập thành công
router.get('/auth/google/callback', ggCallbackController);

// Trang hiển thị thông tin người dùng sau khi đăng nhập
router.get('/profile', ggInfor);

module.exports = router;