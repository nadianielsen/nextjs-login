"use client"
import { getCookie, deleteCookie } from "cookies-next"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const LoginStatus = () => {

    const [token, setToken] = useState(getCookie("token"));

    const pathname = usePathname()

    const router = useRouter()

    useEffect(() => {
        setToken(getCookie("token"))
    }, [pathname]);

    // console.log(token)

    const handleLogout = () => {
        deleteCookie("token", {sameSite: "lax"})
        deleteCookie("user", {sameSite: "lax"})
        setToken(null)
        // skriver fordi at vi skal have den til at sige log in igen
        router.push("/")
    }

    return !token ? <Link href={"/login"}>Log in!</Link> : <button onClick={handleLogout}>Log out</button>
}
 
export default LoginStatus;