//------------ ����ע��͵�¼�߼� ------------//

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// �û�ע��
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // �������
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: '�û�ע��ɹ�' });
    } catch (error) {
        res.status(500).json({ message: '����������' });
    }
};

// �û���¼
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: '�û�δ�ҵ�' });
        }

        // ��֤����
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: '�������' });
        }

        // ���� JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: '����������' });
    }
};
