import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ message: 'Xin chào từ server Node.js! 👋' });
});

app.get('/api/getList', (req, res) => {
    res.json({ list: ['Item 1', 'Item 2', 'Item 3'] });
});

app.listen(PORT, () => {
    console.log(`🚀 Server backend đang chạy tại http://localhost:${PORT}`);
});