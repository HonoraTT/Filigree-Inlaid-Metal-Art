const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // ������޸�Ϊ�κζ˿�

// ʹ�� CORS �м��
app.use(cors());

// ʹ�� body-parser ���� JSON ��ʽ��������
app.use(bodyParser.json());

// ����һ���򵥵� GET ·��
app.get("/", (req, res) => {
    res.send("Hello, Express server is running!");
});

// ����������
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
