import cors from 'cors';
import express from 'express';
import router from './routes/index.js';

const initialize = (app) => {

    //cors is function which can be used by server anywhere
    app.use(cors());
    app.use(express.json());

    //Registers all routes of our application
    router(app);
}

export default initialize;