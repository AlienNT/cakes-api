import Express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import routes from "./routes/index.js";
import {config} from "./config/index.js";
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()

const PORT = process.env.PORT || '5000'
const API = Express()
const filePath = __dirname + './view/dist'

API
    .use(bodyParser.json({limit: '20mb'}))
    .use(cors())
    .use(config.API_ROUTE, routes)
    .use(Express.static(filePath))
    // .use(Express.static(__dirname + './view/assets'))

const start = async () => {
    try {
        await mongoose.connect(config.DB_URL)

        API.listen(PORT, () => {
            console.log('server started in port: ', PORT)
        })

        API.get('/', (req, res) => {
            res.sendFile(filePath + '/index.html')
        })
    } catch (e) {
        console.log(e)

    }
}
await start()