import statusCode from "./statusCodeHelper.js";
import {config} from "../config/index.js";
const cookieConfig = {
    secure: config.IS_COOKIE_SECURE,
    httpOnly: true,
    expires: config.REFRESH_TOKEN_EXPIRES,
}


export function successResponse(response, {
    status = statusCode.OK,
    data,
    cookie = null
}) {
    return response
        .status(status)

        .json({data, status})
}

export function errorResponse(response, {
    status = statusCode.BAD_REQUEST,
    errors
}) {
    return response.status(status).json({errors, status})
}

export function setCookie(response, {
    name = '',
    value = '',
    config = cookieConfig
}) {
    response.cookie(
        name,
        value,
        config
    )
}
export function clearCookie(response, {
    name = '',
    config = cookieConfig
}) {
    response.clearCookie(
        name,
        config
    )
}

export function checkRequireFields(fields, errorMessage) {
    return Object.keys(fields).map(key =>
        !fields[key]?.length ?
            `${errorMessage} ${key}` :
            null
    ).filter(item => !!item)
}

export function exclude(fields) {
    const excludeObject = {}

    fields.forEach(field => {
        excludeObject[field] = 0
    })

    return excludeObject
}