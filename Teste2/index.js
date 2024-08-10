import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './src/routes/user.js';
import sequelize from './src/config/dbConfig.js';

const app = express();
const PORT = 4020;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);

// Test database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
