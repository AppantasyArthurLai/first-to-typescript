import express from 'express';

const PORT = process.env.PORT || 3333
const app = express();

app.get('/', (req, res) => res.send(`Hello, Arthur!`));

app.listen(PORT, () => console.log(`TypeScrupt App listening on ${PORT}!`));