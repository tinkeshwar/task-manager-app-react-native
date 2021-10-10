import {
    AuthResponseType,
    AuthUserResponseType,
    ImageType,
    RegisterUserType,
    UserProfileResponseType
} from './response'

export type {
    AuthUserResponseType,
    AuthResponseType,
    ImageType,
    RegisterUserType,
    UserProfileResponseType
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