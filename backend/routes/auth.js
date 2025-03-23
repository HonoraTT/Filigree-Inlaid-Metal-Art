//------------ ����ע��͵�¼·�� ------------//

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// �û�ע��
router.post('/register', authController.register);

// �û���¼
router.post('/login', authController.login);

module.exports = router;
