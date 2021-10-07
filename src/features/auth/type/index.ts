import {
    AuthResponseType,
    AuthUserResponseType,
    ImageType
} from './response'

export type {
    AuthUserResponseType,
    AuthResponseType,
    ImageType
}

export type ImagePostType = {
    path: string|undefined,
    ext: string|undefined
}

export type UserPostType = {
    firstname: string|undefined,
    middlename: string|undefined,
    lastname: string|undefined,
    phone: number|undefined,
    image?: ImagePostType
}