//------------ �����ȡ�û���Ϣ�߼� ------------//

const User = require('../models/User');

// ��ȡ�û���Ϣ�����޵�¼�û���
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: '�û�δ�ҵ�' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: '����������' });
    }
};
