import dayjs from 'dayjs'
import {getTime} from "../helpers/dataHelper.js";

export const config = {
    DB_URL: process.env.DB_URL,
    SECRET: process.env.SECRET_KEY,
    API_ROUTE: '/api',
    REFRESH_TOKEN_EXPIRES: {
        number: getTime({days: 30}),
        date: dayjs().add(30, 'd').toDate(),
    },
    ACCESS_TOKEN_EXPIRES: getTime({hours: 1}),
    IS_COOKIE_SECURE: process.env.NODE_ENV !== "development"
}