import express from 'express';
import router from './routes/index.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

