import express from 'express';
import chalk from 'chalk';
import "./config/database.js";
import webRoutes from "./routes/web.js";

const app = express();

app.use(express.json());
app.use("/", webRoutes);

app.use((req, res) => {
    res.status(404).send('Not found');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando em http://localhost:${port}`));
});