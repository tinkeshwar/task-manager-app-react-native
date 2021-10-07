import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthResponseType, AuthUserResponseType } from './type'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        /*start common*/
        loading:false as boolean,
        message:'' as string,
        token:'' as string,
        refresh:'' as string,
        /*end common*/

        /*start user*/
        user:{} as AuthUserResponseType,
        profile: {} as AuthResponseType,
        isLoggedIn: false as boolean,
        currentLog: '' as string,
        /*end user*/
    },
    reducers:{
        /*start common*/
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setAlert: (state, action:PayloadAction<string>) =>{
            state.message = action.payload
        },
        setToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload
            state.isLoggedIn = true
        },
        setRToken: (state, action:PayloadAction<string>) => {
            state.refresh = action.payload
        },
        /*end common*/

        /*start user*/
        setProfile: (state, action:PayloadAction<AuthResponseType>) => {
            state.profile = action.payload
        },
        setUser: (state, action:PayloadAction<AuthUserResponseType>) => {
            state.user = action.payload
        },
        setLoggedIn: (state, action:PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
        refresh:(state, action:PayloadAction<string>) => {
            const token = action.payload
            state.token = token || ''
            state.isLoggedIn = token? true:false
        },
        /*end user*/
    }
})

export const {
    setLoading,
    setAlert,
    setToken,
    setRToken,
    setProfile,
    setUser,
    setLoggedIn,
    refresh,
} = AuthSlice.actions

/*start user*/
export const logUser = (auth: AuthResponseType) => (dispatch: any) => {
    dispatch(setUser(auth.user))
    dispatch(setToken(auth.token))
    dispatch(setRToken(auth.refresh))
    dispatch(setLoading(false))
}
/*end user*/

export const loadRefresh = () => async (dispatch: any) => {
    dispatch(setLoading(true))
    const token = localStorage.getItem('token')
    if(token){
        dispatch(refresh(token))
    }
    dispatch(setLoading(false))
}

export const selectLoading = (state:any) => state.auth.loading
export const selectAlert = (state:any) => state.auth.message
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
export const selectAuthUser = (state: any) => state.auth.user
export const selectLoginLog = (state: any) => state.auth.loginLog
export const selectCurrentLog = (state: any) => state.auth.currentLog
export const selectAuthProfile = (state: any) =>state.auth.profile

export default AuthSlice.reducer