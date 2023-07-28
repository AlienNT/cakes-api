import statusCode from "./statusCodeHelper.js";

export function successResponse(response, {
    status = statusCode.OK,
    data,
    cookie = null
}) {
    return response
        .status(status)
        .cookie(
            cookie?.name,
            cookie?.value,
            cookie?.config
        )
        .json({data, status})
}

export function errorResponse(response, {
    status = statusCode.BAD_REQUEST,
    errors
}) {
    return response.status(status).json({errors, status})
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