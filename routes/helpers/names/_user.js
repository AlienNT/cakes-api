import {NEED_TOKEN_MESSAGE} from "../../../helpers/messages/requestMessages.js";
import userRequestFields from "../../../helpers/requestFields/userRequestFields.js";

export const USER = [
    {
        method: 'GET',
        path: '/users',
        isWork: true
    },
    {
        method: 'GET',
        path: '/users/:id',
        isWork: true,
        description: NEED_TOKEN_MESSAGE
    },
    {
        method: 'PATCH',
        path: '/users/:id',
        isWork: true,
        request: userRequestFields,
        description: NEED_TOKEN_MESSAGE
    },
    {
        method: 'DELETE',
        path: '/users/:id',
        isWork: true,
        description: NEED_TOKEN_MESSAGE
    },
]