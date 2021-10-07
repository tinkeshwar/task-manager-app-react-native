import axios from 'axios'
import { Alert } from 'react-native';

class RestApiService {

    protected static instance: any;

    private static get connect(){
        this.init()
        return this.instance
    }

    private static async init(){
        this.instance = axios.create({
            baseURL: 'http://192.168.29.117:8000/api/',
            headers: this.getHttpHeaders(),
            responseType: 'json'
        })
        this.instance.interceptors.response.use(
            (response: any)=>this.responseHandle(response),
            (error: any) =>this.errorHandle(error)
        )
    }

    public static async get(url: string) {
        try {
            const path = this.sanitize(url)
            const success = await this.connect.get(path)
            return await success.data
        } catch (error) {
            const { response } = await error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async post(url: string, data: any){
        try {
            const success = await this.connect.post(url, data)
            return await success.data
        } catch (error) {
            const { response } = await error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async put(url: string, data: any){
        try {
            const success = await this.connect.put(url, data)
            return await success.data
        } catch (error) {
            const { response } = await error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async patch(url: string) {
        try {
            const path = this.sanitize(url)
            const success = await this.connect.patch(path)
            return await success.data
        } catch (error) {
            const { response } = await error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async destroy(url: string) {
        try {
            const path = this.sanitize(url)
            const success = await this.connect.delete(path)
            return await success.data
        } catch (error) {
            const { response } = error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async upload(url: string, data: any){
        try {
            const success = await this.connect.post(url, data, {
                headers: this.getHttpFormHeaders()
            })
            return success.data
        } catch (error) {
            const { response } = error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    public static async uploadWithProgress(url: string, data:any, onUploadProgress: (event: any) => void){
        try {
            const success = await this.instance.post(url, data, {
                headers: this.getHttpFormHeaders(),
                onUploadProgress
            })
            return success.data
        } catch (error) {
            const { response } = error as any
            Alert.alert(response.data.error||'', response.data.message);
            return response.data
        }
    }

    private static async responseHandle (response: any){
        if(response.statusText === 'OK' && response.config.url === 'auth/user/login'){
            await this.init()
        }
        return response
    }

    private static async errorHandle (error: any){
        if(error.message === 'Network Error'){
            window.location.href='/server-error'
        }else{
            const originalRequest = error.config
            if (error.response.status === 401 && originalRequest.url === `${process.env.REACT_APP_API_URL}auth/user/refresh`) {
                this.clearStorage()
                return Promise.reject(error)
            }
            if (error.response.status === 401 && (error.response.statusText === 'Unauthorized' || error.response.data.error === 'Unauthorized') && error.response.data.message === 'Expired token'){
                const refreshToken = this.getRToken()
                if(!refreshToken){
                    return Promise.reject(error)
                }
                return this.instance.post('auth/user/refresh', {refresh: refreshToken}).then((response:any) => {
                    this.setToken(response.data.token)
                    this.setRToken(response.data.refresh)
                    this.instance.defaults.headers['Authorization'] = `${response.data.token}`
                    originalRequest.headers['Authorization'] = `${response.data.token}`
                    return this.instance(originalRequest)
                }).catch((error: any) => {
                    Alert.alert(error||'', error.message);
                    return Promise.reject(error)
                })
            }
            if(error.response.status === 401 && (error.response.data.message === 'Missing authentication' || error.response.data.message === 'Invalid credentials')){
                this.clearStorage()
                Alert.alert(error.response.data.error||'', error.response.data.message);
                window.location.href='/'
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }

    private static getHttpHeaders (){
        const token = this.getToken()
        const headers: any = {'Content-Type': 'application/json','Accept': 'application/json'}
        if (token) headers['Authorization'] = `${token}`
        return headers
    }

    private static getHttpFormHeaders (){
        const token = this.getToken()
        const headers: any = {'Accept': 'application/json'}
        if (token) headers['Authorization'] = `${token}`
        return headers
    }

    private static getToken () {
        // const token = localStorage.getItem('token')
        return 'token'
    }

    private static setToken (token:string) {
        //localStorage.setItem('token', token)
        return token
    }

    private static getRToken () {
        // const token = localStorage.getItem('refresh')||null
        const token = 'yuy'
        if(token){
            const tokenParts = JSON.parse(atob(token.split('.')[1]))
            const now = Math.ceil(Date.now() / 1000)
            if (tokenParts.exp > now) {
                return token
            }
        }
        return token
    }

    private static setRToken (token:string) {
        //localStorage.setItem('refresh', token)
        return token
    }

    private static clearStorage () {
        //localStorage.clear()
        return true
    }

    private static sanitize (path: string){
        const queryStringArray = path.split('?')
        let newString = [] as any
        if(queryStringArray.length === 2){
            const query = queryStringArray[1]
            const queryArray = query.split('&')
            queryArray.forEach(query=>{
                const keyPair = query.split('=')
                if(keyPair.length === 2 && keyPair[1] !== undefined && keyPair[1] !== '' && keyPair[1] !== 'undefined'){
                    newString.push(keyPair.join('='))
                }
            })
        }
        return queryStringArray[0]+(newString.length >0 ? '?'+newString.join('&'):'')
    }
}

export default RestApiService