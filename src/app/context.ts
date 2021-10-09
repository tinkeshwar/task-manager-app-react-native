import React from 'react'

export const UserContext = React.createContext<null>(null)
export const UserProvider = UserContext.Provider

export {
    UserContext as default
}