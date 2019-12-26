// 後端處理

import express from 'express';

const app = express();
app.get('/', (req, res) => res.send(`Hello, Arthur!`));
export default app;
