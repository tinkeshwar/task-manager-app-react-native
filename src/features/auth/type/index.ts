import {
    AuthResponseType,
    AuthUserResponseType,
    ImageType,
    RegisterUserType
} from './response'

export type {
    AuthUserResponseType,
    AuthResponseType,
    ImageType,
    RegisterUserType
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