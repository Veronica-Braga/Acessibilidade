require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./Src/Routes/routes')


app.use(express.json());
app.use(express.urlencoded());

routes(app);

app.get("/", (req, res) => {
    res.json({Message: "Rota inicial"})
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})

