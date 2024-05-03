import express from "express";
import signup from "./signup.js";

export default (app) =>{
    app.use('/signup',signup)
};