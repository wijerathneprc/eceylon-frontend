
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router";
import api from "../../api";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { Loading } from "../loading/Loading";

export function ProtectedRoute({ children }) {
    const [isAthorized, setIsAthorized] = useState(null)

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post('api/token/refresh/', {
                refresh: refreshToken,
            })
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAthorized(true)
            } else {
                setIsAthorized(false)
            }
        } catch (error) {
            console.log(error)
            setIsAthorized(false)
        }

    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAthorized(true)
        }
    }

    useEffect(() => {
        auth()
    }, [])

    if (isAthorized === null) {
        return <Loading />
    }


    return isAthorized ? children : <Navigate to={'/login'} />
}

