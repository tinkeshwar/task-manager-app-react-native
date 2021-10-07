import RestApiService from "../../services/RestApiService"

export const login = async (data: any) => {
    const url = 'auth/user/login'
    return await RestApiService.post(url, data)
}

export const register = async (data: any) => {
    const url = 'auth/user/register'
    return await RestApiService.post(url, data)
}