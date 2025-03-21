const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/data', (req, res) => {
    res.json({ message: '这里是你的 API 数据' });
});
  