//------------ �����û���Ϣ·�� ------------//

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ��ȡ�û���Ϣ
router.get('/profile', userController.getProfile);

module.exports = router;
