import dayjs from 'dayjs'
export const config = {
    DB_URL: process.env.DB_URL,
    SECRET: process.env.SECRET_KEY,
    API_ROUTE: '/api',
    REFRESH_TOKEN_EXPIRES: dayjs().add(30, "days").toDate(),
    ACCESS_TOKEN_EXPIRES: dayjs().add(2, "hours").toDate(),
    IS_COOKIE_SECURE: process.env.NODE_ENV !== "development"
}