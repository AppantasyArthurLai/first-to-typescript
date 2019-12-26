// server 運行

import app from "./app";

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`TypeScrupt App listening on ${PORT}!`));
