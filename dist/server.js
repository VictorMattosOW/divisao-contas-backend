"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// import { env } from './env'
console.log('Iniciando servidor...');
app_1.app.listen({ port: 3000 })
    .then(() => {
    console.log('vamo que vamo 🐱‍🏍👀✔');
});
